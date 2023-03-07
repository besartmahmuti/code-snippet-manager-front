
import withHeaderAndFooter from '../../hoc/withHeaderAndFooter'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LOGO } from '../../lib/constants';

const About = () => {
  return (
    <Container  className='p-2'>
      <Row className="my-5">
        <Col md={6}>
          <Image src={LOGO} fluid />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
          At CSM, we believe in simplifying the process of managing your code snippets.
           Our easy-to-use web app is designed to help developers and programmers of all 
           levels keep their code organized, accessible, and shareable.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>
          Our mission is to provide a hassle-free and streamlined experience for code snippet management.
           We want to empower developers to focus on what they do best - writing great code - 
           by taking care of the tedious task of managing snippets.
          </p>
        </Col>
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>
          Our vision is to become the go-to platform for developers worldwide when it 
          comes to managing their code snippets. We aim to provide the best user experience,
           the most comprehensive feature set, and the most reliable platform to support 
           developers in their quest to write better code.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default withHeaderAndFooter(About)
