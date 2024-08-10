import { NoteType } from '@/types/note';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import PrintError from '../components/PrintError';
import './NoteDetailPage.css';

interface NoteDetailPage {
  noteId: number,
};

function NoteDetailPage({ noteId }: NoteDetailPage) : JSX.Element {
  const note: NoteType|null = getNoteItem(noteId);

  return (
    <div className="NoteDetailPage">
      <BackLink />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>{note.expand.user.name}</span>
          <div dangerouslySetInnerHTML={{ __html: note.content }} />
        </>
      )}
    </div>
  );
}

export default NoteDetailPage;