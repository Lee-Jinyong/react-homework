import { ROUTES } from '@/constants/routes';
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import './NoteCreatePage.css';

interface NoteCreatePage {
  onChangeRoute : (nextRoute: string) => void
}

function NoteCreatePage({ onChangeRoute }: NoteCreatePage): JSX.Element {

  const handleBackToList = () => onChangeRoute?.(ROUTES.list);

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackToList}/>
      <NoteForm mode="create" />
    </div>
  );
}

export default NoteCreatePage;