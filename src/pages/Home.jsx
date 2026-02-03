import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Correct path to CSS

function Home() {
  const navigate = useNavigate();

  const [chats, setChats] = useState([
    { id: 1, name: "random1", email: "random1@test.com", message: "Hey!", online: true },
    { id: 2, name: "random2", email: "random2@test.com", message: "Call me.", online: false },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleAddMember = () => {
    if (newName === "" || newEmail === "") {
      alert("Please enter both Name and Email");
      return;
    }
    const newMember = {
      id: chats.length + 1,
      name: newName,
      email: newEmail,
      message: "New contact added!",
      online: false
    };
    setChats([...chats, newMember]); 
    setNewName("");
    setNewEmail("");
    setShowAddForm(false);
    alert("Member Added Successfully!");
  };
  return (
    <div className="container" style={{ justifyContent: 'flex-start', paddingTop: '30px' }}>
      <div className="dashboard">
        {/* Top Bar with Profile */}
        <div className="top-bar">
          <h2>Chat Dashboard</h2>
          <div 
            className="profile-icon" 
            onClick={() => navigate('/profile')} 
            title="Go to Profile"
          >
            👤
          </div>
        </div>

        {/* Add Member Button */}
        <button 
          style={{ marginBottom: '10px', backgroundColor: showAddForm ? 'gray' : '#28a745' }} 
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Cancel" : "+ Add New Member"}
        </button>
        {showAddForm && (
          <div className="add-form">
            <h4>Add Friend</h4>
            <input 
              placeholder="Enter Name" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
            />
            <input 
              placeholder="Enter Email" 
              value={newEmail} 
              onChange={(e) => setNewEmail(e.target.value)} 
            />
            <button onClick={handleAddMember}>Add to Chat</button>
          </div>
        )}
        {/* Chat List */}
        <ul className="chat-list">
          {chats.map((chat) => (
            <li key={chat.id} className="chat-item">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{chat.name} <span style={{fontSize:'12px', color:'gray'}}>({chat.email})</span></strong>
                <span>{chat.online ? "🟢" : "⚪"}</span>
              </div>
              <p style={{ margin: '5px 0 0 0', color: '#555' }}>{chat.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Home;
