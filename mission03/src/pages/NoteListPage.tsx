import { useState } from 'react';
import { getNoteList } from '../api/getNote';
import NoteList from '../components/NoteList';
import './NoteListPage.css';

function NoteListPage() {
  const [list] = useState(() => getNoteList());

  return (
    <div className="NoteListPage">
      <NoteList list={list} />
      <a className="createNoteLink" href="#create-note">
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;