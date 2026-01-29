export default function ChatWindow({ selectedChat, onAddChat }) {
  return (
    <div className="chat-window">
      {!selectedChat ? (
        <div className="empty-chat">
          Select or create a chat
        </div>
      ) : (
        <>
          <h3>{selectedChat.name}</h3>
          <div className="messages">Chat messages...</div>
          <input placeholder="Type a message..." />
        </>
      )}

      {/* ADD CHAT BUTTON */}
      <button className="chat-add-btn" onClick={onAddChat}>
        + New Chat
      </button>
    </div>
  );
}
