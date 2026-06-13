# 해커톤 협업 강의 — 슬라이드

Marp 기반 강의 슬라이드입니다. [`슬라이드_구성안.md`](./슬라이드_구성안.md)를 HTML로 구현했습니다.

## 구조

```
Slider/
├── slides/              # 섹션별 소스 (00~08)
├── theme/lecture.css    # 유형별 디자인 (표지·목차·섹션표지·본문)
├── reference/           # 디자인 참조
├── dist/                # 빌드 결과 (HTML · PDF)
└── 슬라이드_구성안.md   # 49장 구성 원본
```

## 디자인 (슬라이드_구성안 기준)

| 유형 | 클래스 | 설명 |
|------|--------|------|
| 표지 | `title` | Slide 01 — 큰 타이틀 + 강사명 |
| 목차 | `toc` | Slide 02 — 8개 항목 2열 |
| 섹션 표지 | `section-cover` | **01 + 부제 + 한 줄** (다크, 본문과 톤 구분) |
| 본문 | `body` | 제목 + 불릿/표 |
| 마무리 | `closing` | Slide 49 — 표지형 클로징 |

- **Color:** Cursor cream `#f7f7f4` · orange `#f54e00` · 섹션표지 `#26251e`
- **Typography:** Noto Sans KR + JetBrains Mono

## 보기

### GitHub Pages

**https://sijinjeon.github.io/sireal-class/**

### 로컬

```bash
cd 260623_성균관대_해커톤_협업_강의/Slider
npm install
npm run build:all
npm run preview    # http://localhost:3456
```

키보드: ← → / Space · F = 전체화면

## 수정 · 빌드

`slides/` 수정 → `npm run build:all` → push → GitHub Actions 배포

## 슬라이드 구성 (49장)

| # | 구간 | 장수 |
|---|------|------|
| 01–02 | 표지 · 목차 | 2 |
| 03–06 | 인트로 | 4 |
| 07–11 | §1 소통 창구 | 5 |
| 12–16 | §2 아이데이션 | 5 |
| 17–22 | §3 아이디어 선별 | 6 |
| 23–27 | §4 문서화 | 5 |
| 28–33 | §5 구현 | 6 |
| 34–38 | §6 오류수정 | 5 |
| 39–42 | §7 발표준비 | 4 |
| 43–49 | FAQ · 마무리 | 7 |

> 상세: [`슬라이드_구성안.md`](./슬라이드_구성안.md)
