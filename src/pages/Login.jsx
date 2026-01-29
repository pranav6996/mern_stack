import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Correct path to CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert("Please fill in all fields!");
    } else {
      console.log("User Logged in:", email);
      navigate('/home'); 
    }
  };
  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => navigate('/signup')}>
          Don't have an account? Signup here
        </button>
      </div>
    </div>
  );
}

export default Login;