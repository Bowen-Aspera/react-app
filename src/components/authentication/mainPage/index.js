import React, { useState } from "react";
import axios from '../../../plugins/axios';
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [data, setData] = useState({
    password: '',
    email: '',
  });
  const [errorPassword, setErrorPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setData({ ...data, [field]: value });
  };

  const handleLogin = () => {
    axios.post('accounts/token/login/', data)
      .then(response => {
        localStorage.setItem('token', response.data.auth_token);
        navigate('/application');
      })
      .catch(error => {
        const errorMessage = error.response.data;
        setErrorPassword(errorMessage.password);
        alert("Incorrect Email or Password!")
      });
  };

  return (
    <div style={form}>
      <div id='title'>
        <p style={errorStyle}>{errorPassword}</p>
      </div>
      <div id='input'>
        <input
          style={input}
          placeholder="Email"
          onChange={(event) => handleInputChange(event, "email")}
        />
        <br />
        <input
          style={input}
          placeholder="Password"
          type="password"
          onChange={(event) => handleInputChange(event, "password")}
        />
        <br />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button style={loginButtonStyle} onClick={handleLogin}>Login</button>
        <button style={registerButtonStyle} onClick={() => navigate('./registration')}>Register</button>
      </div>
    </div>
  );
};

const form = {
  flexDirection: 'column',
  maxWidth: '300px',
  margin: '0 auto',
  borderWidth: '1px',
  borderColor: '#333',
  borderStyle: 'solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  padding: '1rem',
  borderRadius: '4px',
};

const input = {
  marginBottom: '8px',
  padding: '8px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#f2f2f2',
};

const errorStyle = {
  color: 'red',
  marginBottom: '8px',
};

const loginButtonStyle = {
  margin: '0.5rem',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const registerButtonStyle = {
  margin: '0.5rem',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#6c757d',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default MainPage;
