import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormProps } from "../../lib/types";

const CostumeForm: FC<FormProps> = ({ onSubmit, usernameLabel, passwordLabel , title }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Email:", email, "Password:", password);
    };
    return (
        <div className="container mt-5 p-5 " style={{ width: '30%', backgroundColor: '#f8f9fa', border: '4px', borderRadius: '5px' }} >
            <h1>{title}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{usernameLabel}</Form.Label>
                    <Form.Control
                        type="email"

                        placeholder={usernameLabel}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" >
                    <Form.Label>{passwordLabel}</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder={passwordLabel}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" className="m-4" type="submit"   >
                  {title}
                </Button>

            </Form>
            <Form.Text className="text-muted mt-4">
                {title === "Login" ? 
                <a href='/register'> Create new account</a> : <a href="/login">Login</a> }
            </Form.Text>
        </div>
    )
}
export default CostumeForm