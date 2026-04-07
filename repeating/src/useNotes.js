import { useState, useEffect } from "react";

const STORAGE_KEY = "notes";

export function useNotes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [""];
  });


  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = () => setNotes([...notes, ""]);

  const updateNote = (i, value) => {
    const copy = [...notes];
    copy[i] = value;
    setNotes(copy);
  };

  return { notes, addNote, updateNote };
}
