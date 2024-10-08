import { ChangeEvent, FormEvent, useId, useState } from 'react';
import { getUser, getUserList } from '../api/getUser';
import { NoteType } from '../types/note';
import { convertHTMLToText, convertTextToHTMLString } from '@/utils';
import './NoteForm.css';

const userList = getUserList();

interface NoteForm {
  mode?: 'create' | 'edit',
  note?: NoteType,
  newNoteId?: number,
  onCreate?: (newNoteItem: NoteType) => void,
  onEdit?: (willEditNote: NoteType) => void,
  onDelete? : (willDeleteNoteId: number) => void,
  onBackToList?: () => void
};

function NoteForm({ mode = 'create', note, newNoteId, onCreate, onEdit, onDelete, onBackToList }: NoteForm) : JSX.Element {
  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  // [상태 선언]
  const [formData, setFormData] = useState(() => {
    // 노트 생성 모드
    if (mode === 'create') {
      return {
        title: '',
        content: '',
        userId: 0,
      }
    }

    if (mode === 'edit' && note) {
      return {
        title: note.title,
        content: convertHTMLToText(note.content),
        userId: note.userId,
      }
    } else {
      throw new Error('노트(note) 데이터가 존재하지 않습니다.')
    }
  })

  // [상태 업데이트]

  const handleUpdateFormData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // 노트 생성
  const handleCreateNote = (e: FormEvent) => {
    e.preventDefault();

    const { title, content, userId } = formData;

    if (title.trim().length === 0) {
      alert('제목을 적어주세요.')
      return;
    }
    else if (content.trim().length === 0) {
      alert('내용을 적어주세요.')
      return;
    } else if (userId === 0) {
      alert('작성자를 선택하세요.')
      return;
    }

    const newUserId = Number(userId);

    const newNoteItem = {
      id: newNoteId,
      title: title.trim(),
      content: convertTextToHTMLString(content),
      userId: newUserId,
      expand: {
        user: getUser(newUserId),
      }
    }

    onCreate?.(newNoteItem as NoteType);

    onBackToList?.();
  };

  // 노트 초기화
  const handleReset = (e: FormEvent) => {
    e.preventDefault();
  };

  // 노트 수정
  const handleEditNote = (e: FormEvent) => {
    e.preventDefault();

    const willEditNote = {
      ...note,
      ...formData
    }

    onEdit?.(willEditNote);
    
    onBackToList?.();
  }

  // 노트 삭제
  const handleDelete = () => {
    if(note) {
      onDelete?.(note.id as number)
    }

    onBackToList?.();
  };

  // [파생 상태]
  const isCreateMode = mode.includes('create');
  const submitButtonLabel = isCreateMode ? '추가' : '수정';
  const handleSubmit = isCreateMode ? handleCreateNote : handleEditNote

  return (
    <form className="NoteForm" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          type="text"
          id={titleId}
          name="title"
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          value={formData.content}
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