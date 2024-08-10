import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import './NoteCreatePage.css';

function NoteCreatePage() {
  return (
    <div className="NoteCreatePage">
      <BackLink />
      <NoteForm mode="create" />
    </div>
  );
}

export default NoteCreatePage;