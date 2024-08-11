## 노트 앱과 리액트 상태 업데이트

#

### 과제 해결 순서

##### 1. 과제 주제 선정

- 상태 업데이트를 통한 '틱택토 게임'과 '노트 앱'을 수업 중 구현했고, 두 가지 중 하나를 과제를 통해 재구현이 목표
- 수업 때 놓친 부분이 몇 있었던 '노트 앱'을 과제 주제로 선정
- 추가적인 기능을 구현할까 생각했으나, 타입스크립트로 다시 만들어 보는 것을 통해 추가적인 공부를 하고자 결정

##### 2. 환경 구성

- 지난 번 과제 수행 시 만들어둔 vite + react 스캐폴딩을 이용해서 프로젝트 구성
- TypeScript 설치
- jsx, js확장자 대신 tsx, ts 확장자 사용

##### 3. 진행

- 수업 때 했던 커밋을 바탕으로 구현
- 아래의 순서로 진행
  - 노트 생성 화면
  - 뒤로가기 버튼
  - 노트 상세보기 화면
  - 노트 수정 화면

##### 4. 어려웠던 점, 고민했던 점

- 야무쌤께서 언급하신 초기 상태 생성 코드의 차이를 [공식 문서](https://ko.react.dev/reference/react/useState#avoiding-recreating-the-initial-state "초기 state 생성 관련 공식 문서")에서 확인 했으나, 정확하게 이해하지 못함(아래는 노트 앱에서 사용된 코드)
  - 초기화 함수를 전달하는 경우
  - 초기 상태를 직접 전달하는 경우

```tsx
const [list, setList] = useState<NoteListType>(() => getNoteList());
```

&nbsp;

- 타입스크립트에서 routeInfo 상태를 생성할 때, userId 값을 생성 시에만 null을 사용하고, 다른 경우에는 number를 사용하고 싶었으나, 타입스크립트에서 오류를 표시함
- 해당 문제를 해결하기 위해 userId를 전부 `number | null`로 명시할 수 밖에 없었음

```tsx
const [routeInfo, setRouteInfo] = useState<routeType>({
  route: ROUTES.list,
  noteId: null,
});
```

```ts
export function getUser(userId: number): UserType | null {
  const userList = getUserList();
  const user = userList.find((user) => user.id === userId);
  return user ? user : null;
}
```
