import React from 'react';
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

  return (
    <Container fluid>
      <Row>
        <Col>
          <NoteForm addNote={addNote} />
        </Col>
      </Row>
      <Row>
        {notes.map((note, index) => (
          <Col key={index} xs={12} md={4}>
            <Note note={note} index={index} handleDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NoteList;
