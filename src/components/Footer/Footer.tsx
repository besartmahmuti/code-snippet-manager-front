import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light pt-2 mt-auto fixed-bottom ">
      <Container>
        <p className="text-muted text-center">
          &copy; {new Date().getFullYear()} Code Snippet Manager
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
