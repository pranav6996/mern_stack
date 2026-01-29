import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Correct path to CSS

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      alert("Please fill in all fields");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters");
    } else {
      alert("Account Created Successfully! Go to Login.");
      navigate('/'); 
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => navigate('/')}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
