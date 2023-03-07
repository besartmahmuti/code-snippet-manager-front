import { FC, useState } from "react";
import { useDispatch } from 'react-redux';
import { Button, Form } from "react-bootstrap";
import { FormProps } from "../../lib/types";
import { LOGO } from "../../lib/constants";
import './costumeForm.module.scss'
import { login } from "../../lib/store/slices/auth";
import styles from './costumeForm.module.scss'
import { useNavigate } from "react-router-dom";
import { updateAlertContent } from "../../lib/store/slices/alert";

const CostumeForm: FC<FormProps> = ({ isRegistering, usernameLabel, passwordLabel, title, fullNameLabel, emailLabel }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");

    const handleSubmit = (event: any) => {

        event.preventDefault();
        if (isRegistering) {
            if (email.trim() === '' || password.trim() === '' || fullName.trim() === '' || userName.trim() === '') {
                dispatch(updateAlertContent({
                    state: true,
                    title: 'Error',
                    content: 'All fields are required',
                    type: 'danger'
                }))
            } else {
                console.log("from form Email:", email, "Password:", password, "fullName:", fullName, "userName", userName);
            }

        } else {
            if (email.trim() === '' || password.trim() === '') {
                dispatch(updateAlertContent({
                    state: true,
                    title: 'Error',
                    content: 'Email or password is incorrect',
                    type: 'danger'
                }))
            } else {
                console.log("from form Email:", email, "Password:", password)
                dispatch(login({ isLoggedIn: true, username: email, }));

                navigate("/snippet");
            }

        }

    };
    return (
        <div className={"container mt-5 p-5 text-center " + styles.myFormStyle}  >
            <h1>{title}</h1>
            <img src={LOGO} className={"img-fluid " + styles.myImg} alt="placeholder" />
            <Form onSubmit={handleSubmit}>
                {isRegistering &&
                    <>
                        <Form.Group controlId="formBasicEmail" className="mt-2">

                            <Form.Control
                                type="text"
                                placeholder={"Type your full name"}
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mt-2">

                            <Form.Control
                                type="text"

                                placeholder={usernameLabel}
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </Form.Group>
                    </>
                }

                <Form.Group controlId="formBasicEmail" className="mt-2">


                    <Form.Control
                        type="email"

                        placeholder={emailLabel}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-2" >

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