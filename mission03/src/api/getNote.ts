import notesData from "@/data/notes.json";
import usersData from "@/data/users.json";
import { NoteType } from "@/types/note";

export function getNoteList() {
  return notesData.map((note) => {
    const user = usersData.find((user) => user.id === note.userId);
    if (user) {
      (note as NoteType).expand = { user };
    }
    return note;
  });
}

export function getNoteItem(noteId: number | null) {
  if (noteId) {
    const notes = getNoteList();
    const note = notes.find((note) => note.id === noteId);
    return note ? (note as NoteType) : null;
  }
  return null;
}
