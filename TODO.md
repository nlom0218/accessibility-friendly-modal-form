### 구현 요구사항

- **모달 닫기**

- **포커스 흐름**
  - 닫히면 원래 버튼(트리거)으로 포커스가 돌아와야 해요.
  -
- **폼 사용성**
- **UI/UX**
  -
- **접근성**
  - `aria-modal`, `aria-labelledby`, `aria-describedby` 같은 기본 속성을 챙겨주세요.
  - 애니메이션은 `prefers-reduced-motion` 설정을 고려해 주면 더 좋아요.
- **선언적 호출**
  - 모달은 함수 호출을 통해 선언적으로 열 수 있어야 해요.
    - 예시로 `const result = await openFormModal()` 형태로 사용 가능해야 하며,
    - 제출 완료 시 입력값이 반환되고, 취소/닫기 시 `null`이 반환되어야 해요.
