import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import CreateChat from "../components/CreateChat";
import ProfilePanel from "../components/ProfilePanel";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleCreateChat = (chat) => {
    setChats((prev) => [...prev, chat]);
    setSelectedChat(chat);
    setShowCreate(false);
  };

  return (
    <div className="chat-page">
      {/* TOP BAR */}
      <div className="top-bar">
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Home
        </span>

        <button onClick={() => setShowProfile((p) => !p)}>
          👤
        </button>
      </div>

      {/* BODY */}
      <div className="chat-body">
        <ChatList
          chats={chats}
          setSelectedChat={setSelectedChat}
        />

        <ChatWindow
          selectedChat={selectedChat}
          onAddChat={() => setShowCreate(true)}
        />

        {showProfile && <ProfilePanel />}
      </div>

      {/* CREATE CHAT MODAL */}
      {showCreate && (
        <CreateChat
          onCreate={handleCreateChat}
          onClose={() => setShowCreate(false)}
        />
      )}
    </div>
  );
}
