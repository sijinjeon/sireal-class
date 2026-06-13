# Future Slide 레이아웃 참조

[future-slide](https://github.com/bytonylee/future-slide)의 **tightened-slide** 원칙을 Marp 테마에 적용했습니다.

## 적용한 UX 규칙

| 원칙 | Marp 구현 |
|------|-----------|
| 헤더 · 본문 · 푸터 구역 분리 | `slide-chrome` → `flow-rail` → `slide-body` |
| Kicker가 제목 위 | `t-meta` (섹션) + `t-cat` (단계) |
| 본문 제목 좌측 정렬 | 모든 content 슬라이드 left-aligned |
| 고정 레이아웃 (S01~S22) | `section-cover`, `content step-N`, `closing` |
| 헤어라인·플랫 surface | 그라데이션·둥근 카드 제거 |
| Mono 메타 / Light display | JetBrains Mono + Noto Sans KR 300 |
| 하단 safe area | `--nav-safe-bottom` 여백 |

## 슬라이드 타입

- **title** — S01 Index Cover (대형 light title)
- **section-cover** — S01 cover-row (번호 + 제목)
- **content step-1~5** — 본문 5단계 (flow-rail 타임라인)
- **faq-item** — Q&A (flow-rail 없음)
- **closing** — S10 Split Closing

## 본문 5단계

```
방법·순서 → 도구 → 규칙 → 실습 → 점검
```

`step-N` 클래스가 flow-rail active/done 상태를 CSS로 제어합니다.
