# 해커톤 협업 강의 — 슬라이드

Marp 기반 강의 슬라이드입니다. `슬라이드_구성안.md`를 HTML 슬라이드로 구현했습니다.

## 구조

```
260623_성균관대_해커톤_협업_강의/
├── 강의노트.md
├── Example_prompt/
└── Slider/
    ├── slides/           # 섹션별 소스 (구현 순서)
    ├── theme/lecture.css # Cursor DESIGN.md 기반 테마
    ├── reference/        # awesome-design-md 참조
    ├── dist/             # 빌드 결과 (HTML · PDF · Pages 배포)
    └── 슬라이드_구성안.md
```

## 디자인 시스템

[awesome-design-md](https://github.com/VoltAgent/awesome-design-md) **Cursor** 토큰 + [future-slide](https://github.com/bytonylee/future-slide) **tightened-slide** 레이아웃 규칙을 Marp 테마에 적용했습니다.

- **Color:** Cursor cream `#f7f7f4` · orange `#f54e00`
- **Typography:** Noto Sans KR + Inter · JetBrains Mono (메타)
- **Layout:** chrome → flow-rail → body (헤더·본문·푸터 구역)
- **인트로 표지:** `intro-cover` — "인트로" (다크, 인트로 구간 시작)
- **섹션 표지:** `section-cover` — **섹션명만** (부제·번호 없음)
- **본문:** `step-1~5` + horizontal flow-rail (5단계 진행)
- **상세:** `reference/future-slide-LAYOUT.md`

## 보기

### GitHub Pages (iPad Safari)

**https://sijinjeon.github.io/sireal-class/**

> 저장소 Settings → Pages → Source: **GitHub Actions**

- **HTML 슬라이드:** 위 URL을 Safari에서 연다
- **PDF:** https://sijinjeon.github.io/sireal-class/slides.pdf

### 로컬

- **HTML:** `dist/index.html`을 브라우저에서 연다
- **PDF:** `dist/slides.pdf`
- **키보드:** ← → 또는 Space, F = 전체화면

## 수정 · 빌드

```bash
cd 260623_성균관대_해커톤_협업_강의/Slider
npm install
npm run build:all    # dist/index.html + dist/slides.pdf
npm run preview      # http://localhost:3456
```

`slides/` 수정 → `npm run build:all` → push → GitHub Actions가 `Slider/dist/`를 Pages에 배포

## 슬라이드 구성

| 구간 | 파일 | 장수 |
|------|------|------|
| 표지·목차 | 00-intro.md | 2 |
| 인트로 표지 + 본문 | 00-intro.md | 5 (표지 1 + 본문 4) |
| §1~7 (표지 + 5단계×5) | 01~07.md | 42 (섹션당 6) |
| FAQ·마무리 | 08-faq.md | 7 |

> **슬라이드 타입:** `title` → `toc` → `intro-cover` → `intro` → `section-cover`(이름만) → `content`

> 각 섹션: **방법·순서 → 도구 → 규칙 → 실습 → 점검** 순서 고정
