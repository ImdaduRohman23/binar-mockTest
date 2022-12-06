import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [angka, setAngka] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(angka.length === 4 && user.length !== 0) {
            navigate('/home');
            localStorage.setItem('token', 'token masuk');
            localStorage.setItem('user', `${user}`);
        }
        else alert('Mohon masukan 4 angka');
    };

    return (
        <Container>
            <div className="login-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 login-content" controlId="formBasicEmail">
                        <h1 className='login-title'>Todo App</h1>
                        <Form.Label className='login-text'>Login ?</Form.Label>
                        <Form.Control type="number" placeholder="Masukan 4 angka" onChange={(e) => setAngka(e.target.value)}/>
                        <br />
                        <Form.Control type="text" placeholder="Masukan nama mu ya . ." onChange={(e) => setUser(e.target.value)}/>
                        <Button variant="warning" type="submit" className='login-button'>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )
}

export default Login
