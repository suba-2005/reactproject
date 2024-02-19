import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('signup-page');
    return () => {
      document.body.classList.remove('signup-page');
    };
  }, []);

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword || !phoneNumber) {
      setError('Please enter all fields');

      if (!phoneNumber) {
        phoneInputRef.current.focus();
      }

      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!document.getElementById('termsCheckbox').checked) {
      setError('Please agree to the Terms & Conditions');
      return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userPhoneNumber', phoneNumber);

    setError('');
    navigate('/');
  };

  return (
    <div className="signup-container">
      <center>
        <h2>SIGN UP</h2>
      </center>
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameInputRef}
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
        />
      </div>
      <div className="input-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          ref={phoneInputRef}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordInputRef}
        />
      </div>
      <div className="input-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          ref={confirmPasswordInputRef}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <p>
        <input type="checkbox" id="termsCheckbox" className='check' />
        <span>I read and agree to</span>
        <span>
          <a href="#.com" className="link">
            {' '}
            Terms & Condition
          </a>
        </span>
      </p>
      <center>
        <button className="bt1" onClick={handleSignup}>
          Create
        </button>
      </center>
      <center>
        <p className="acc">
          Already have an account? <Link to="/login" className='butt'>Sign in</Link>
        </p>
      </center>
    </div>
  );
};

export default SignupPage;