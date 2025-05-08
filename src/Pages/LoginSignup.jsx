import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './CSS/LoginSignup.css';
import redbgg from "../Components/Assets/flowerrr.png";

export const LoginSignup = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false); // For terms checkbox
  const [showTerms, setShowTerms] = useState(false); // For showing modal

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem(email));
      if (storedUser && storedUser.password === password) {
        login(storedUser);
        alert(`Welcome back, ${storedUser.username}!`);
        navigate('/');
      } else {
        alert('Invalid email or password.');
      }
    } else {
      if (!agreed) {
        alert("You must agree to the Terms and Conditions to sign up.");
        return;
      }

      const existingUser = localStorage.getItem(email);
      if (existingUser) {
        alert('An account with this email already exists.');
        return;
      }

      const userData = { username, email, password };
      localStorage.setItem(email, JSON.stringify(userData));
      login(userData);
      alert(`Account created for ${username}`);
      navigate('/');
    }

    setUsername('');
    setEmail('');
    setPassword('');
    setAgreed(false);
  };

  return (
    <div
      className="loginsignup"
      style={{
        backgroundImage: `url(${redbgg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isLogin && (
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <label>
                I agree to the{' '}
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setShowTerms(true)}>
                  Terms and Conditions
                </span>
              </label>
            </div>
          )}

          <button type="submit">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="loginsignup-login">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </div>
      </div>

      {showTerms && (
        <div
          className="terms-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="terms-content"
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              textAlign: 'left',
              color: '#000'
            }}
          >
            <h2>Terms & Conditions - FlowerKnows Makeup</h2>
            <p>By creating an account or using our services, you agree to the following:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>All content, images, and branding of FlowerKnows are protected and may not be reused without permission.</li>
              <li>Returns and refunds are subject to our return policy. Products must be unopened and returned within 7 days.</li>
              <li>We collect user data (email, login details) solely for authentication and do not share with third parties.</li>
            </ul>
            <button onClick={() => setShowTerms(false)} style={{ marginTop: '15px', padding: '6px 12px', backgroundColor: 'pink' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
