import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'; // Assuming you have a CSS file for custom styles

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup forms

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isLogin) {
        response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
        toast.success('Login successful');
      } else {
        response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
        toast.success('Signup successful');
      }
      setToken(response.data.token);
    } catch (error) {
      toast.error('Authentication failed: ' + (error.response?.data.message || error.message));
    }
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container className="login-container">
      <ToastContainer />
      <Row className="justify-content-center">
        <Col md={6} className="login-form">
          <div>
            <h2 className="login-heading">{isLogin ? 'Login' : 'Signup'}</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {isLogin ? 'Login' : 'Signup'}
              </Button>
            </Form>
            <p className="mt-3">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button className="btn btn-link p-0 signup" onClick={handleToggleForm}>
                {isLogin ? 'Signup' : 'Login'}
              </button>
            </p>
          </div>
        </Col>
        <Col md={6} className="welcome-message">
          <div>
            <h2 className="welcome-heading">Welcome to Construction Project Monitoring</h2>
            {/* Additional content can be added here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
