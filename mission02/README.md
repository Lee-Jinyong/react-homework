## 리액트를 활용한 컴포넌트 구현 과제

#

### 과제 해결 순서

##### 1. 프로젝트 컴포넌트 선정

- 지난번 과제 수행 시 날씨 아이콘 컴포넌트를 작성했기에 TVING 컴포넌트를 재선정
- TypeScript를 통해 속성 검사를 하기로 결정했기 때문에 간단한 컴포넌트인 자동로그인 버튼으로 컴포넌트 구현 결정

##### 2. figma 디자인 생성

- figma에서 자동로그인 버튼 컴포넌트 생성
- Active와 Deactive 상태로 나누어 컴포넌트 구현
- 자동로그인 컴포넌트 figma 시안 [LINK](https://www.figma.com/design/s5Oaky8F4Im19A7m0ZCWxI/mission02?node-id=1-74&t=DZyeWb41AkdyLo78-1)

##### 3. 환경 구성

- 지난 번 과제 수행 시 만들어둔 vite + react 스캐폴딩을 이용해서 프로젝트 구성
- TypeScript 설치
- jsx확장자 대신 tsx 확장자 사용

##### 4. 어려웠던 점

- 직접 작동할 수 있는 버튼을 만들고 싶었으나, 전달된 속성(prop)을 변환해서 리렌더링 하는 방법에 어려움을 겪었음
- 그래서 수업에서 했듯이, 데이터 파일을 만들어두고 수동으로 수정하는 방식을 사용해 컴포넌트를 작동할 수 있음
- `<div>` 태그가 button 역할을 가지게 하고 싶어서 jsx 코드에 role 속성을 부여했는데, 올바른 사용인지 모르겠음

&nbsp;
&nbsp;
&nbsp;

---

## 피드백

진용님 과제 수행 잘 봤습니다. 😃
남겨주신 코멘트 확인하고 답변 드려요.

`<div>` 요소를 임의로 버튼(button) 역할을 부여할 수 있지만,
**WAI-ARIA 기술보다 HTML 표준 기술이 우선해야 합니다.**

결과적으로 가능은 하지만, 권하고 싶지는 않습니다.
아래 작성된 각 예시 코드를 살펴보세요.

&nbsp;

##### HTML 표준 요소를 사용할 경우 코드

`<button>` 요소와 onClick 이벤트 핸들러만 사용

```jsx
function AutoLoginButton({ isActive }: Props): JSX.Element {
  const handleClickWrapper = () => {
    /* ... */
  };

  return (
    <button
      type="button"
      className="autoLoginWrapper"
      onClick={handleClickWrapper}
    >
      {/* ... */}
    </button>
  );
}
```

&nbsp;

##### WAI-ARIA를 사용해 버튼 역할을 부여할 경우 코드

`<div role="button">` 요소와 onClick, onKeyDown 이벤트 핸들러 사용 필요

```jsx
function AutoLoginButton({ isActive }: Props): JSX.Element {
  const handleClickWrapper = () => { /* ... */ };

  // 사용자가 Enter 키를 눌렀을 때, 반응하는 이벤트 핸들러 추가 필요
  const handleKeyDownWrapper = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      handleClickWrapper();
    }
  };

  return (
    <div
      role="button"
      className="autoLoginWrapper"
      onClick={handleClickWrapper}
      onKeyDown={handleKeyDownWrapper}
    >
      {/* ... */}
    </button>
  )
}
```
