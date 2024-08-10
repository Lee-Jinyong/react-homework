import { FormEvent, useId } from 'react';
import { getUserList } from '../api/getUser';
import './NoteForm.css';
import { NoteType } from '../types/note';
import { convertHTMLToText } from '@/utils/convertTextToHTMLString';

const userList = getUserList();

interface NoteForm {
  mode?: 'create' | 'edit',
  note?: NoteType,
};

function NoteForm({ mode = 'create', note }: NoteForm) : JSX.Element {
  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleDelete = () => {
    console.log('delete');
  };

  const isCreateMode = mode.includes('create');
  const submitButtonLabel = isCreateMode ? '추가' : '수정';

  if (note) {
    note.content;
  }

  return (
    <form className="NoteForm" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input type="text" id={titleId} defaultValue={note?.title} />
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          defaultValue={note && convertHTMLToText(note.content)}
        />
      </div>

      {isCreateMode && (
        <div className="formControl">
          <label htmlFor={userId}>작성자</label>
          <select id={userId}>
            <option>작성자 선택</option>
            {userList.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="buttonGroup">
        <button type="submit">{submitButtonLabel}</button>

        {isCreateMode ? (
          <button type="reset">초기화</button>
        ) : (
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;