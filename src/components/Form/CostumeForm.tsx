import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormProps } from "../../lib/types";

const CostumeForm: FC<FormProps> = ({ isRegistering, usernameLabel, passwordLabel, title, fullNameLabel, emailLabel }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if(isRegistering){
            console.log("from form Email:", email, "Password:", password, "fullName:", fullName, "userName", userName);
        }else{
            console.log("from form Email:", email, "Password:", password)
        }
      
    };
    return (
        <div className="container mt-5 p-5 " style={{ width: '30%', backgroundColor: '#f8f9fa', border: '4px', borderRadius: '5px' }} >
            <h1>{title}</h1>
            <Form onSubmit={handleSubmit}>
                {title === 'Register' &&
                    <>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{fullNameLabel}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"Type your full name"}
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{usernameLabel}</Form.Label>
                            <Form.Control
                                type="text"

                                placeholder={usernameLabel}
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </Form.Group>
                    </>
                }

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{emailLabel}</Form.Label>
                    <Form.Control
                        type="email"

                        placeholder={emailLabel}
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
                {!isRegistering ?
                    <a href='/register'> Create new account</a> : <a href="/login">Login</a>}
            </Form.Text>
        </div>
    )
}
export default CostumeForm