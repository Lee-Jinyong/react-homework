# Vite + React 템플릿

Vite 커스텀 템플릿을 사용해 React 프로젝트 스캐폴딩 할 수 있습니다.

---

## 스캐폴딩 명령

[degit](https://github.com/Rich-Harris/degit?tab=readme-ov-file#readme) 명령을 사용해 프로젝트를 스캐폴딩합니다.

```sh
degit Lee-Jinyong/vite-react <프로젝트_이름>
```

&nbsp;

## 폴더 구조
![폴더 구조](https://github.com/user-attachments/assets/d625d34a-dec4-4ee3-a58d-a18b78751d89)

- public : 정적 자산 폴더
- src : 소스 파일 폴더
  - assets : 동적 자산 폴더
  - components : 컴포넌트 폴더
  - pages : 페이지 폴더
- index.html : 메인 HTML 파일

&nbsp;

## 설치된 패키지

- Vite
- React
- types/react
- types/react-dom
- types/node
- vitejs/plugin-react
- ESLint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh

스캐폴딩 후 `pnpm i` 명령어를 실행하여 패키지를 설치할 것
(해당 커스텀 템플릿은 pnpm을 사용)
