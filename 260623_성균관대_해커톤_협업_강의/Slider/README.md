# 해커톤 협업 강의 — 슬라이드

Marp 기반 강의 슬라이드입니다. `슬라이드_구성안.md`를 HTML 슬라이드로 구현했습니다.

## 구조

```
Slider/
├── slides/           # 섹션별 소스 (구현 순서)
│   ├── 00-intro.md       표지 · 목차 · 인트로
│   ├── 01-소통창구.md
│   ├── 02-아이데이션.md
│   ├── 03-아이디어선별.md
│   ├── 04-문서화.md
│   ├── 05-구현.md
│   ├── 06-오류수정.md
│   ├── 07-발표준비.md
│   └── 08-faq.md         FAQ · 마무리
├── theme/lecture.css # 커스텀 테마
├── dist/
│   ├── deck.md       # merge 결과 (자동 생성)
│   └── index.html    # 슬라이드 (브라우저에서 열기)
└── 슬라이드_구성안.md
```

## 보기

### GitHub Pages (iPad·모바일 포함)

**https://sijinjeon.github.io/sireal-class/**

> 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정해야 합니다.

- **HTML 슬라이드:** 위 URL (Safari에서 열기, 홈 화면 추가 가능)
- **PDF:** https://sijinjeon.github.io/sireal-class/slides.pdf

### 로컬

- **바로 보기:** `dist/index.html`을 브라우저에서 연다
- **키보드:** ← → 또는 Space로 넘김, F = 전체화면

## 수정 · 빌드

```bash
cd Slider
npm install
npm run build:all    # HTML + PDF → docs/ (GitHub Pages용)
npm run preview      # http://localhost:3456
```

섹션별 `slides/` 파일을 수정한 뒤 `npm run build:all`을 실행하면 `docs/`가 갱신됩니다.
push하면 GitHub Actions가 Pages에 자동 배포합니다.

## 슬라이드 구성 (49장)

| 구간 | 파일 | 장수 |
|------|------|------|
| 표지·목차·인트로 | 00-intro.md | 6 |
| §1 소통 창구 | 01-소통창구.md | 5 |
| §2 아이데이션 | 02-아이데이션.md | 5 |
| §3 아이디어 선별 | 03-아이디어선별.md | 6 |
| §4 문서화 | 04-문서화.md | 5 |
| §5 구현 | 05-구현.md | 6 |
| §6 오류수정 | 06-오류수정.md | 5 |
| §7 발표준비 | 07-발표준비.md | 4 |
| FAQ·마무리 | 08-faq.md | 7 |
