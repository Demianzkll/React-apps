import { useEffect, useRef } from "react";
import { useNotesContext } from "./NotesContext";

export default function Notes() {
  const { notes, addNote, updateNote } = useNotesContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [notes.length]);

  return (
    <div>
      <button onClick={addNote}>Додати нотатку</button>

      <ul>
        {notes.map((note, i) => (
          <li key={i}>
            <input
              ref={inputRef}
              value={note}
              onChange={(e) => updateNote(i, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
