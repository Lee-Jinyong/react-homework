import { UserType } from "./user";

export interface NoteType {
  id?: number;
  title: string;
  content: string;
  userId: number;
  createdAt?: string;
  updatedAt?: string;
  expand?: {
    user: UserType;
  };
}

export type NoteListType = NoteType[];
