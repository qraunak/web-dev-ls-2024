import React from 'react';
import { Navbar, Form } from 'react-bootstrap';

function Header({ darkMode, setDarkMode }) {
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} className="justify-content-between">
      <Navbar.Brand>Notes Keep</Navbar.Brand>
      <Form>
        <Form.Check 
          type="switch"
          id="darkModeSwitch"
          label="Dark Mode"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </Form>
    </Navbar>
  );
}

export default Header;
