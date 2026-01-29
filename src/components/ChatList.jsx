export default function ChatList({ chats, setSelectedChat }) {
  return (
    <div className="chat-list">
      {chats.map((chat, i) => (
        <div
          key={i}
          className="chat-item"
          onClick={() => setSelectedChat(chat)}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}
