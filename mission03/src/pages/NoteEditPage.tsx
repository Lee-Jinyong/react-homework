import { ROUTES } from '@/constants/routes';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import PrintError from '../components/PrintError';
import './NoteEditPage.css';
import { NoteType } from '@/types/note';

interface NoteEditPage {
  noteId: number,
  onEdit?: (willEditNote: NoteType) => void, 
  onChangeRoute?: (nextRoute: string, pickNoteId?: number) => void,
};

function NoteEditPage({ noteId, onEdit, onChangeRoute }: NoteEditPage) : JSX.Element {
  const note = getNoteItem(noteId);

  const handleBackToList = () => onChangeRoute?.(ROUTES.list);

  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackToList} />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>노트 편집</h2>
          <NoteForm mode="edit" note={note} onEdit={onEdit} onBackToList={handleBackToList} />
        </>
      )}
    </div>
  );
}

export default NoteEditPage;