import { Button, Col, Row, Image } from "react-bootstrap"
import withHeaderAndFooter from "../../hoc/withHeaderAndFooter"
import { LOGO } from "../../lib/constants"
import { useSelector } from "react-redux"
import { RootState } from "../../lib/store/store"
import styles from './Profile.module.scss'

const Profile  = () => {
  const currentUser = useSelector((state: RootState) => state.auth.value)
    return (
      <div className={"container mt-5 p-5 " + styles.myFormStyle} >
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Image  src={LOGO} roundedCircle />
          <h2>{currentUser.username}</h2>
          <p>"test"</p>
          <Button variant="primary">Edit Profile</Button>
        </Col>
      </Row>
    </div>
    )
  
}
export default withHeaderAndFooter(Profile)
