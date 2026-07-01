#!/usr/bin/env node
/**
 * cursor.csv 업로드 문제 진단 스크립트
 * 사용: node scripts/validate-csv.mjs "/path/to/cursor.csv"
 */

import { readFileSync } from "fs";

function parseCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') inQuotes = !inQuotes;
    else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else current += char;
  }
  result.push(current.trim());
  return result;
}

function normalizeHeader(header) {
  return header.replace(/^\uFEFF/, "").trim().toLowerCase().replace(/[\s-]+/g, "_");
}

const file = process.argv[2];
if (!file) {
  console.error("사용법: node scripts/validate-csv.mjs cursor.csv");
  process.exit(1);
}

const text = readFileSync(file, "utf8");
const lines = text.split(/\r?\n/).filter((l) => l.trim());
const rawHeaders = parseCSVLine(lines[0] || "");
const headers = rawHeaders.map(normalizeHeader);

console.log("\n=== cursor.csv 진단 ===\n");
console.log("파일:", file);
console.log("데이터 행 수:", Math.max(lines.length - 1, 0));
console.log("헤더 (정규화):", headers.join(", "));

const hasEmail = headers.some((h) => ["email", "e_mail", "email_address", "이메일"].includes(h));
const hasCheckin = headers.some((h) =>
  ["checked_in_at", "checkedinat", "check_in_at", "체크인", "체크인_시각"].includes(h)
);

console.log("\n필수 컬럼:");
console.log("  email:", hasEmail ? "OK" : "MISSING");
console.log("  checked_in_at:", hasCheckin ? "OK" : "MISSING");

if (!hasEmail || !hasCheckin) {
  console.log("\n원인: Luma export 형식과 다릅니다.");
  console.log("필요 컬럼: email, first_name, last_name, checked_in_at");
  console.log("Luma Guests 탭 → 체크인 필터 → CSV export 를 사용하세요.");
  process.exit(1);
}

const emailIdx = headers.findIndex((h) => ["email", "e_mail", "email_address", "이메일"].includes(h));
const checkinIdx = headers.findIndex((h) =>
  ["checked_in_at", "checkedinat", "check_in_at", "체크인", "체크인_시각"].includes(h)
);

let withCheckin = 0;
let withoutCheckin = 0;

for (let i = 1; i < lines.length; i++) {
  const values = parseCSVLine(lines[i]);
  const checkin = values[checkinIdx]?.trim();
  if (checkin) withCheckin++;
  else withoutCheckin++;
}

console.log("\n체크인 현황:");
console.log("  checked_in_at 있음:", withCheckin);
console.log("  checked_in_at 없음:", withoutCheckin);

if (withCheckin === 0) {
  console.log("\n원인: CSV에는 참가자가 있지만 아무도 체크인되지 않았습니다.");
  console.log("Luma에서 참가자를 체크인 처리한 뒤 CSV를 다시 export하세요.");
  process.exit(1);
}

console.log("\n결과: 이 CSV는 업로드 가능합니다 (" + withCheckin + "명).");
