import { useState } from 'react';
import { ROUTES } from './constants/routes';
import NoteListPage from './pages/NoteListPage';
import NoteCreatePage from './pages/NoteCreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NoteEditPage from './pages/NoteEditPage';
import { getNoteList } from './api/getNote';

function NoteApp() {
  // 상태 선언
  const [routeInfo, setRouteInfo] = useState({
    route: ROUTES.list,
    noteId: null,
  });

  const [list] = useState(() => getNoteList());

  // 상태 업데이트

  // 루트 상태 변경 함수
  const handleChangeRoute = (nextRoute: string) => {
    setRouteInfo({
      ...routeInfo,
      route: nextRoute
    })
  }

  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
    case ROUTES.create:
      return <NoteCreatePage onChangeRoute={handleChangeRoute} />;
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} />;
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} />;
  }
}

export default NoteApp;