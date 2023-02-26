import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import './header.modules.scss'


const Header = ()=> {
  const auth = false
  return (
    <Navbar bg="light"  variant="light" expand="lg">
      <Container>        
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