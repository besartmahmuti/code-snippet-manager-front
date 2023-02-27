
import withHeaderAndFooter from '../../hoc/withHeaderAndFooter'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LOGO } from '../../lib/constants';

const About = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
          <Image src={LOGO} fluid />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            varius augue libero, sed tristique nisi hendrerit id. Sed non
            lacus in massa commodo tempor. Nam hendrerit ipsum a ligula porta,
            eu commodo enim malesuada. Nulla facilisi. Donec non justo in
            enim dapibus placerat vel vel ipsum. Sed vel commodo mi.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            varius augue libero, sed tristique nisi hendrerit id. Sed non
            lacus in massa commodo tempor. Nam hendrerit ipsum a ligula porta,
            eu commodo enim malesuada.
          </p>
        </Col>
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            varius augue libero, sed tristique nisi hendrerit id. Sed non
            lacus in massa commodo tempor. Nam hendrerit ipsum a ligula porta,
            eu commodo enim malesuada.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default withHeaderAndFooter(About)
