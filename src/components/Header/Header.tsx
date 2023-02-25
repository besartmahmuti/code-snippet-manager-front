import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const auth = false
  return (
    <Navbar bg="dark"  variant="dark" expand="lg">
      <Container>
          {/* <Navbar.Brand href="/home">
            <img
              src='./assets/logo/logo.PNG'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand> */}
        
        <Navbar.Brand  href="/">CSM</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          {auth &&   <Nav.Link href="/dashboard">Dashboard</Nav.Link> }
           {!auth &&  <Nav.Link href="/login">Login</Nav.Link>}
           {!auth &&  <Nav.Link href="/register">Register</Nav.Link>}
          </Nav>
          {auth && 
          <Navbar.Text>
            Signed in as: <a href="/profile">Username</a>
          </Navbar.Text>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header