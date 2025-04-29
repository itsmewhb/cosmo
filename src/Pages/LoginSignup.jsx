import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

export const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN logic
      const storedUser = JSON.parse(localStorage.getItem(email));
      if (storedUser && storedUser.password === password) {
        alert(`Welcome back, ${storedUser.username}!`);
        navigate('/'); // Redirect to homepage
      } else {
        alert('Invalid email or password.');
      }
    } else {
      // SIGNUP logic
      const existingUser = localStorage.getItem(email);
      if (existingUser) {
        alert('An account with this email already exists.');
        return;
      }

      const userData = { username, email, password };
      localStorage.setItem(email, JSON.stringify(userData));
      alert(`Account created for ${username}`);
      navigate('/'); // Redirect after signup
    }

    // Clear form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="loginsignup">
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
              <input type="checkbox" required />
              <p>By continuing, you agree to the terms and privacy policy.</p>
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Continue'}</button>
        </form>
        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  );
};
