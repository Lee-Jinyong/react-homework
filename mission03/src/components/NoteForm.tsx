import { ChangeEvent, FormEvent, useId, useState } from 'react';
import { getUserList } from '../api/getUser';
import { NoteType } from '../types/note';
import { convertHTMLToText } from '@/utils/convertTextToHTMLString';
import './NoteForm.css';

const userList = getUserList();

interface NoteForm {
  mode?: 'create' | 'edit',
  note?: NoteType,
};

function NoteForm({ mode = 'create', note }: NoteForm) : JSX.Element {
  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  // 상태 선언
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userId: 0,
  })

  // 상태 업데이트

  const handleUpdateFormData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // 노트 생성
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  // 노트 초기화
  const handleReset = (e: FormEvent) => {
    e.preventDefault();
  };

  // 노트 삭제
  const handleDelete = () => {
    console.log('delete');
  };

  // 파생 상태
  const isCreateMode = mode.includes('create');
  const submitButtonLabel = isCreateMode ? '추가' : '수정';

  if (note) {
    note.content;
  }

  return (
    <form className="NoteForm" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          type="text"
          id={titleId}
          name="title"
          value={note?.title}
          onChange={handleUpdateFormData}
        />
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          value={note && convertHTMLToText(note.content)}
          onChange={handleUpdateFormData}
        />
      </div>

      {isCreateMode && (
        <div className="formControl">
          <label htmlFor={userId}>작성자</label>
          <select
            id={userId}
            name="userId"
            value={formData.userId}
            onChange={handleUpdateFormData}
          >
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