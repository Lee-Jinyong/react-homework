import { useState } from 'react';
import { ROUTES } from './constants/routes';
import NoteListPage from './pages/NoteListPage';
import NoteCreatePage from './pages/NoteCreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NoteEditPage from './pages/NoteEditPage';
import { getNoteList } from './api/getNote';
import { NoteListType, NoteType } from './types/note';

function NoteApp() {
  // [상태 선언]
  const [routeInfo, setRouteInfo] = useState({
    route: ROUTES.list,
    noteId: null,
  });

  const [list, setList] = useState<NoteListType>(() => getNoteList());

  // [상태 업데이트]

  // 루트 상태 변경 함수
  const handleChangeRoute = (nextRoute: string) => {
    setRouteInfo({
      ...routeInfo,
      route: nextRoute
    })
  }

  // 노트 생성
  const handleCreateNote = (newNoteItem: NoteType) => {
    setList([
      ...list,
      newNoteItem
    ])
  };

  // 노트 수정

  // 노트 삭제

  // [파생 상태]
  const newNoteId:number = list.length + 1;


  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
    case ROUTES.create:
      return <NoteCreatePage newNoteId={newNoteId} onCreate={handleCreateNote} onChangeRoute={handleChangeRoute} />;
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} />;
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} />;
  }
}

export default NoteApp;