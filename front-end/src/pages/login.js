import React, { useState } from 'react';
import axios from 'axios';
import { NavBar } from './NavBar';
import '../Styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // success or error

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      const token = response.data.access_token || response.data.token;
      if (token) {
        if (remember) localStorage.setItem('token', token);
        else sessionStorage.setItem('token', token);
        setMessage('Login successful');
        // TODO: redirect (useNavigate) if desired
      } else {
        setMessage('Login succeeded but no token returned');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="login-page">
        <div className="login-container">
          <h2 className="login-title">Welcome back</h2>
          <p className="login-sub">Sign in to continue to your account</p>

          <form onSubmit={handleLogin} className="login-form" noValidate>
            <label className="login-label">
              Email
              <input
                type="email"
                className="login-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </label>

            <label className="login-label password-label">
              Password
              <div className="password-row">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="login-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="show-toggle"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>

            <div className="options-row">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a href="/forgot" className="forgot-link">Forgot?</a>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {message && (
              <p className={`login-message ${message.toLowerCase().includes('success') ? 'success' : 'error'}`}>
                {message}
              </p>
            )}

            <div className="dividerr">or continue with</div>

            <div className="social-row">
              <button type="button" className="social-btn google">Google</button>
              <button type="button" className="social-btn facebook">Facebook</button>
            </div>

            <p className="signup">
              Don't have an account? <a href="/register">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
