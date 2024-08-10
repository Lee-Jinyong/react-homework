import { useState } from 'react';
import { ROUTES } from './constants/routes';
import NoteListPage from './pages/NoteListPage';
import NoteCreatePage from './pages/NoteCreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NoteEditPage from './pages/NoteEditPage';

function NoteApp() {
  const [routeInfo] = useState({
    route: ROUTES.list,
    noteId: null,
  });

  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage />;
    case ROUTES.create:
      return <NoteCreatePage />;
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} />;
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} />;
  }
}

export default NoteApp;