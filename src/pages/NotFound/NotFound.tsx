import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h1 className="display-4">404 Page Not Found</h1>
          <p className="lead">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="primary">Go Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
