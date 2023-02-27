
import { Button, Col, Container, Row } from 'react-bootstrap'
import './home.modules.scss';
import { LOGO } from '../../lib/constants';
import withHeaderAndFooter from '../../hoc/withHeaderAndFooter';
import { RootState } from '../../lib/store/store';
import { useSelector } from 'react-redux';



const Home = () => {
  

  const currentUser = useSelector((state: RootState) => state.auth.value)
  
  return (
    <Container fluid className="p-0 container mt-5">
      <Row className="m-0 " >
        <Col lg={6} className="p-5">
          <h1 className="display-4 mb-4">Welcome to code snippet manager</h1>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae risus sed quam vestibulum fringilla.
          </p>
          {currentUser.isLoggedIn ? <Button variant="primary" href="/dashboard" className='buttonMargin'>
            Get started
          </Button> :
            <>
              <Button variant="primary" href="/login" className="ml-4 buttonMargin">
                Login
              </Button>

              <Button href="/register" variant="outline-primary" className="mr-3" >
                Register
              </Button>
            </>
          }
        </Col>
        <Col lg={6} className="p-0">
          <img src={LOGO} className="img-fluid" alt="placeholder" />
        </Col>
      </Row>
    </Container>
  );

}
export default withHeaderAndFooter(Home)
