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
