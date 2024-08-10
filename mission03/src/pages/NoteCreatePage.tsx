import { ROUTES } from '@/constants/routes';
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import './NoteCreatePage.css';
import { NoteType } from '@/types/note';

interface NoteCreatePage {
  newNoteId: number,
  onCreate : (newNoteItem: NoteType) => void,
  onChangeRoute : (nextRoute: string) => void
}

function NoteCreatePage({ newNoteId, onCreate, onChangeRoute }: NoteCreatePage): JSX.Element {

  const handleBackToList = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackToList}/>
      <NoteForm mode="create" newNoteId={newNoteId} onCreate={onCreate} onBackToList={handleBackToList} />
    </div>
  );
}

export default NoteCreatePage;