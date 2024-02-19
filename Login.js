import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      if (!email) {
        emailInputRef.current.focus();
      } else {
        passwordInputRef.current.focus();
      }
      return;
    }
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    if (email === storedEmail && password === storedPassword) {
      setError('');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  return (
    <div className="login-container">
      <center>
        <h2>SIGN IN</h2>
      </center>
      <div className={`input-group ${error && !email ? 'highlight' : ''}`}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
        />
      </div>
      <div className={`input-group ${error && !password ? 'highlight' : ''}`}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordInputRef}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <p className='divq'>
        <Link to="/forgot-password" className='fp' onClick={handleForgotPassword}>
          <br></br>
          Forgot Password?
        </Link>
      </p>
      <center>
        <br></br>
        <button className='log1' onClick={handleLogin}>SIGNIN</button>
      </center>

      <center>
        <p className='dive'>
<br></br>
          Don't have an account? <Link to="/reg" className='si'>Sign Up</Link>
        </p>
      </center>
    </div>
  );
};

export default LoginPage;
