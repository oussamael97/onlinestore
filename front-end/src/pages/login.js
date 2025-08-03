import axios from 'axios';
import { useState } from 'react';
import { NavBar } from './NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      const token = response.data.access_token || response.data.token;

      // Store the token in localStorage (or cookies if needed)
      localStorage.setItem('token', token);

      console.log('Login successful! Token:', token);
      setError('Login successfu');
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError('Login failed. Check your credentials.');
    }
  };

  return (
    <>
    <NavBar/>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </>
  );
};

export default Login;
