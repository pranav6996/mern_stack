import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
function Profile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("BeginnerCoder");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const handleNameChange = () => {
    if (username === "") {
      alert("Name cannot be empty!");
    } else {
      alert("Name updated to: " + username);
    }
  };
  const handlePassChange = () => {
    if (oldPass === "" || newPass === "") {
      alert("Please fill all password fields");
    } else if (newPass.length < 6) {
      alert("New password is too short!");
    } else {
      alert("Password changed successfully!");
      setOldPass("");
      setNewPass("");
    }
  };
  return (
    <div className="container">
      <div className="profile-page">
        <h2>My Profile</h2>
        <button 
          style={{ background: 'gray', marginBottom: '20px', padding: '5px' }} 
          onClick={() => navigate('/home')}
        >
          ← Back to Chat
        </button>
        <div className="section">
          <h3>Edit Details</h3>
          <label>Display Name:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <button onClick={handleNameChange}>Update Name</button>
        </div>
        <div className="section" style={{ borderBottom: 'none' }}>
          <h3>Security</h3>
          <input 
            type="password" 
            placeholder="Old Password" 
            value={oldPass} 
            onChange={(e) => setOldPass(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="New Password" 
            value={newPass} 
            onChange={(e) => setNewPass(e.target.value)} 
          />
          <button style={{ backgroundColor: '#dc3545' }} onClick={handlePassChange}>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;