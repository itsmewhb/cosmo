import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './CSS/LoginSignup.css';
import redbgg from "../Components/Assets/flowerrr.png";

export const LoginSignup = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);  // Default is Login
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');  // For forgot password
  const [agreed, setAgreed] = useState(false); 
  const [showTerms, setShowTerms] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);  // To toggle forgot password form

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

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser) {
      storedUser.password = newPassword; // Reset the password
      localStorage.setItem(email, JSON.stringify(storedUser));  // Save the new password
      alert('Password has been reset successfully!');
      setIsForgotPassword(false);  // Close the forgot password form
    } else {
      alert('No account found with this email.');
    }

    setEmail('');
    setNewPassword('');
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
        {isForgotPassword ? (
          // Forgot Password Form
          <form className="loginsignup-fields" onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
            <span onClick={() => setIsForgotPassword(false)} style={{ cursor: 'pointer', color: 'blue' }}>
              Back to Login
            </span>
          </form>
        ) : (
          // Login / Sign Up Form
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
        )}

        <div className="loginsignup-login">
          {isLogin ? (
            <>
              <p>
                Don't have an account?{' '}
                <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </p>
              <p>
                Forgot Password?{' '}
                <span onClick={() => setIsForgotPassword(true)} style={{ cursor: 'pointer' }}>
                  Reset it
                </span>
              </p>
            </>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </div>
      </div>

      {showTerms && (
        <div className="terms-modal">
          <div className="terms-content">
            <h2>Terms & Conditions - FlowerKnows Makeup</h2>
            <p>By creating an account or using our services, you agree to the following:</p>
            <ul>
              <li>All content, images, and branding of FlowerKnows are protected and may not be reused without permission.</li>
              <li>Returns and refunds are subject to our return policy. Products must be unopened and returned within 7 days.</li>
              <li>We collect user data (email, login details) solely for authentication and do not share with third parties.</li>
            </ul>
            <button onClick={() => setShowTerms(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
