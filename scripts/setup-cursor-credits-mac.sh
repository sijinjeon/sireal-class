#!/usr/bin/env bash
set -euo pipefail

TARGET_DIR="/Users/sireal/Downloads/06. Cursor/cursor-credits"
REPO_URL="https://github.com/cursorcommunityled/cursor-credits.git"
RESEND_API_KEY="${RESEND_API_KEY:-${1:-}}"

if [ -z "${RESEND_API_KEY}" ]; then
  echo "사용법: RESEND_API_KEY=re_xxx ./setup-mac.sh"
  echo "   또는: ./setup-mac.sh re_xxx"
  exit 1
fi

echo "==> Cursor Credits 설치: ${TARGET_DIR}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js(v18+)가 필요합니다. https://nodejs.org/"
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm 설치 중..."
  npm install -g pnpm
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker Desktop이 필요합니다. https://www.docker.com/products/docker-desktop/"
  exit 1
fi

mkdir -p "$(dirname "${TARGET_DIR}")"

if [ ! -d "${TARGET_DIR}/.git" ]; then
  git clone "${REPO_URL}" "${TARGET_DIR}"
else
  echo "기존 저장소 발견, git pull..."
  git -C "${TARGET_DIR}" pull --ff-only
fi

cd "${TARGET_DIR}"

echo "==> 의존성 설치"
pnpm install
pnpm --dir backend install

echo "==> .env.local 생성"
cat > .env.local <<EOF
DATABASE_URL=postgres://postgres:postgres@localhost:54320/send_hackathon
RESEND_API_KEY=${RESEND_API_KEY}
MAIL_FROM=onboarding@resend.dev
PORT=8787
CORS_ORIGIN=http://localhost:5173
EOF

echo "==> PostgreSQL(Docker) 시작"
docker compose up -d

echo "==> DB 스키마 적용"
pnpm --dir backend db:push

echo ""
echo "설치 완료!"
echo "실행: cd \"${TARGET_DIR}\" && pnpm dev"
echo "브라우저: http://localhost:5173"
