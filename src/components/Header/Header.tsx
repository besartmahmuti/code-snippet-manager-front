import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { store } from '../../lib/store/store';



const Header = ()=> {
  const currentUser = store.getState().auth.value

  return (
    <Navbar bg="light"  variant="light" expand="lg">
      <Container>        
        <Navbar.Brand  href="/">CSM</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          {currentUser?.isLoggedIn &&   <Nav.Link href="/dashboard">Dashboard</Nav.Link> }
           {!currentUser?.isLoggedIn &&  <Nav.Link href="/login">Login</Nav.Link>}
           {!currentUser?.isLoggedIn &&  <Nav.Link href="/register">Register</Nav.Link>}
          </Nav>
          {currentUser?.isLoggedIn && 
          <Navbar.Text>
            Signed in as: <a href="/profile">{currentUser?.username}</a>
          </Navbar.Text>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header