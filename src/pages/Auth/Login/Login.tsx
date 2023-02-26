import { useState } from "react";
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"
import { Button, Form } from "react-bootstrap";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container mt-5 p-5 " style={{ width: '30%', backgroundColor: '#f8f9fa', border: '4px', borderRadius: '5px' }} >
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
         
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="m-4" type="submit"   >
          Login
        </Button>

      </Form>
      <Form.Text  className="text-muted mt-4">
      <a href='/register'> Create new account</a>  
      </Form.Text>
    </div>
  );
}
export default withHeaderAndFooter(Login)
