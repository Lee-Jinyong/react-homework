import { MouseEvent } from 'react';
import NoteList from '../components/NoteList';
import './NoteListPage.css';
import { ROUTES } from '@/constants/routes';
import { NoteListType } from '@/types/note';

interface NoteListPage {
  list : NoteListType,
  onChangeRoute : (nextRoute: string, pickNoteId?: number) => void,
}

function NoteListPage({ list, onChangeRoute }: NoteListPage) : JSX.Element {

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.create);
  }

  return (
    <div className="NoteListPage">
      <NoteList list={list} onChangeRoute={onChangeRoute} />
      <a className="createNoteLink" href="#create-note" onClick={handleClick}>
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;