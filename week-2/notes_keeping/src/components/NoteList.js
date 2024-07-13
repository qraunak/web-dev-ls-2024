import React, {useState} from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

import { Container, Row, Col } from 'react-bootstrap';

function NoteList({ notes, setNotes }) {
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleDelete = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleEdit = (index) => {
    setTitle(notes[index].title);
    setContent(notes[index].content);
    handleDelete(index);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <NoteForm addNote={addNote} title={title} setTitle={setTitle} setContent={setContent} content = {content}/>
        </Col>
      </Row>
      <Row>
        {notes.map((note, index) => (
          <Col key={index} xs={12} md={4}>
            <Note note={note} index={index} handleDelete={handleDelete} handleEdit ={handleEdit}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NoteList;
