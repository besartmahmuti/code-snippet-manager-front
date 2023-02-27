import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RootState } from '../../lib/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../lib/store/slices/auth';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const currentUser = useSelector((state: RootState) => state.auth.value)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () =>{
    dispatch(logout());
    navigate('/')
  }
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CSM</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {currentUser?.isLoggedIn && <Nav.Link href="/snippet">Snippet</Nav.Link>}
            {!currentUser?.isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
            {!currentUser?.isLoggedIn && <Nav.Link href="/register">Register</Nav.Link>}
          </Nav>
          {currentUser?.isLoggedIn &&

            <NavDropdown title={"Signed in as: " + currentUser?.username} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>

            </NavDropdown>


          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header