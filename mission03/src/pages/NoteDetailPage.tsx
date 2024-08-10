import { NoteType } from '@/types/note';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import PrintError from '../components/PrintError';
import './NoteDetailPage.css';
import { ROUTES } from '@/constants/routes';
import { MouseEvent } from 'react';
import { convertSlug } from '@/utils';

interface NoteDetailPage {
  noteId: number | null,
  onChangeRoute?: (nextRoute: string, pickNoteId?: number) => void,
};

function NoteDetailPage({ noteId, onChangeRoute }: NoteDetailPage) : JSX.Element {
  const note: NoteType|null = getNoteItem(noteId);

  const handleBackToList = () => onChangeRoute?.(ROUTES.list);

  const handleEditNoteView = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.edit);
  }

  const createMarkup = () => ({ __html: (note as NoteType).content })

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackToList} />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>{note.expand?.user.name}<a href={`#edit/${convertSlug(note.title)}`} onClick={handleEditNoteView}><span className='sr-only'>수정</span>···</a></span>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </>
      )}
    </div>
  );
}

export default NoteDetailPage;