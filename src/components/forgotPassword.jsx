import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
i

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const { resetPassword } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        try {
            await resetPassword(email);
            setMessage("Check your inbox for further instructions");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div>
                <h2 className="h2">Reset Password</h2>
                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="h2" controlId="formBasicEmail">
                        <Form.Control 
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <div className="grid">
                        <Button variant="primary" type="submit">
                            Reset Password
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default ForgotPassword;
