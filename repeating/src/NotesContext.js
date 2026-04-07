import { createContext, useContext } from "react";
import { useNotes } from "./useNotes";

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const notesState = useNotes();

  return (
    <NotesContext.Provider value={notesState}>
      {children}
    </NotesContext.Provider>
  );
}

export const useNotesContext = () => useContext(NotesContext);
