import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import { Box } from '@mui/material'
import { NoteObject } from './models/note';

function App() {

  const [notes, setNotes] = useState<NoteObject[]>([]);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem('notes', JSON.stringify([note, ...notes]));
  }

  useEffect(() => {
     if (sessionStorage.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string));
     }
  }, []);

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  return (
    <div className="App">
      <Header />
      <Box style={{padding: 20}}>
      <CreateNote addNotes={addNotes} />
      <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </div>
  );
}

export default App;
