import { MouseEvent, useState } from 'react';
import { getNoteList } from '../api/getNote';
import NoteList from '../components/NoteList';
import './NoteListPage.css';
import { ROUTES } from '@/constants/routes';

interface NoteListPage {
  onChangeRoute : (nextRoute: string) => void
}

function NoteListPage({ onChangeRoute }: NoteListPage) : JSX.Element {
  const [list] = useState(() => getNoteList());

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault;
    onChangeRoute?.(ROUTES.create);
  }

  return (
    <div className="NoteListPage">
      <NoteList list={list} />
      <a className="createNoteLink" href="#create-note" onClick={handleClick}>
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;