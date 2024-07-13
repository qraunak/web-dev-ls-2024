import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function NoteForm({ addNote, title, setTitle, content, setContent }) {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit} className="note-form">
      <Form.Group>
        <Form.Control 
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control 
          as="textarea"
          rows={3}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit">Add Note</Button>
    </Form>
  );
}

export default NoteForm;
