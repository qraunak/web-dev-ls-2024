
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const savedTheme = JSON.parse(localStorage.getItem('darkMode')) || false;
    setNotes(savedNotes);
    setDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
