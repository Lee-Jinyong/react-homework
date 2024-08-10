import { MouseEvent } from 'react';
import { NoteListType } from '../types/note';
import './NoteList.css';
import { ROUTES } from '@/constants/routes';
import { convertSlug } from '@/utils';

interface NoteList {
  list: NoteListType,
  onChangeRoute?: (nextRoute: string, pickNoteId?: number) => void
};

function NoteList({ list, onChangeRoute }: NoteList) : JSX.Element {

  // 노트 상세 정보 화면으로 이동
  const handleClick = (pickNoteId: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.detail, pickNoteId);
  };

  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
        {list.map((item) => {
          const slug = `#${convertSlug(item.title)}`;

          return (
            <li key={item.id}>
              <a href={slug} onClick={handleClick(item.id as number)}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NoteList;