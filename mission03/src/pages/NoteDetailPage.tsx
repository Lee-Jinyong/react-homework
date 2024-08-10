import { NoteType } from '@/types/note';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import PrintError from '../components/PrintError';
import './NoteDetailPage.css';
import { ROUTES } from '@/constants/routes';

interface NoteDetailPage {
  noteId: number,
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => {}
};

function NoteDetailPage({ noteId, onChangeRoute }: NoteDetailPage) : JSX.Element {
  const note: NoteType|null = getNoteItem(noteId);

  const handleBackToList = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackToList} />
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