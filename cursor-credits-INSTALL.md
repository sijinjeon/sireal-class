# Cursor Credits 로컬 설치

해커톤 참가자에게 Cursor 크레딧(리딤 코드) 이메일을 일괄 발송하는 도구입니다.

## Mac 설치 (한 번에)

사전 준비: Node.js 18+, Docker Desktop, pnpm

```bash
cd "/Users/sireal/Downloads/06. Cursor"
git clone https://github.com/cursorcommunityled/cursor-credits.git
cd cursor-credits

# 또는 자동 설치 스크립트 (저장소 루트의 setup-mac.sh)
RESEND_API_KEY=re_YOUR_KEY ./setup-mac.sh
```

## 실행

```bash
cd "/Users/sireal/Downloads/06. Cursor/cursor-credits"
pnpm dev
```

- 프론트: http://localhost:5173
- 백엔드: http://localhost:8787

## 사용 순서

1. Luma에서 **체크인한 참가자** CSV export
2. 웹 UI에 CSV 업로드
3. 리딤 코드 붙여넣기 → Assign Codes
4. 해커톤 이름 입력 → Send Emails

## 환경 변수 (.env.local)

| 변수 | 설명 |
|------|------|
| `DATABASE_URL` | Docker Postgres (기본: localhost:54320) |
| `RESEND_API_KEY` | Resend API 키 |
| `MAIL_FROM` | 발신 이메일 (테스트: onboarding@resend.dev) |

`.env.local`은 git에 커밋되지 않습니다.

## CSV 업로드가 안 될 때

앱은 **`checked_in_at`(체크인 시각)이 있는 행만** 업로드합니다. 0명이면 다음 단계가 비어 "작동 안 함"처럼 보입니다.

필수 컬럼: `email`, `first_name`, `last_name`, `checked_in_at`

CSV 진단:

```bash
node scripts/validate-cursor-credits-csv.mjs "/path/to/cursor.csv"
```

흔한 원인:

- Luma에서 체크인 없이 CSV만 export
- 컬럼명 불일치 (Luma export 사용 권장)
- `checked_in_at` 값이 전부 비어 있음

## Cloud Agent(원격)에서 실행 중일 때

설치 경로: `/workspace/cursor-credits` (원격 Linux)

다른 PC에서 접속:

1. Cursor로 **같은 Cloud Agent 세션** 접속
2. 원격 터미널에서 `cd /workspace/cursor-credits && pnpm dev` 확인
3. 해당 PC 브라우저에서 `http://localhost:5173` 접속

Mac 로컬 폴더에 clone하지 않아도 Cursor 포트 포워딩으로 열립니다. 세션이 종료되면 접속 불가.
