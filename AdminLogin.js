import React, { useState } from "react";
import './AdminLogin.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email !== storedEmail || password !== storedPassword) {
      setError('Invalid email or password');
      return;
    }

    setError('');
    window.location.href = '/';
    setEmail('');
    setPassword('');
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h2>ADMIN LOGIN</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Adminname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Login</button>
        <div className="register-link">
          <br></br>
         
       <Link to="/reg" className="nav__link active"  style={{ backgroundColor: 'rgb(15,14,62)' }}></Link>
       
        </div>
      </form>
    </div>
  );
};

export default Login;
