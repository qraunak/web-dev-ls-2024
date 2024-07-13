import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Note ({ note, index, handleDelete, handleEdit }) {
  return (
    <Card className="note">
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Button variant="warning" onClick={() => handleEdit(index)}>Edit</Button>
        <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Note;
