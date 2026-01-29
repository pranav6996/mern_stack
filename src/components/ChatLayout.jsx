import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import ProfilePanel from "./ProfilePanel";

export default function ChatLayout({
  showProfile,
  toggleProfile,
  selectedChat,
  setSelectedChat
}) {
  return (
    <div style={styles.container}>
      <ChatList setSelectedChat={setSelectedChat} />
      <ChatWindow
        selectedChat={selectedChat}
        toggleProfile={toggleProfile}
      />
      {showProfile && <ProfilePanel />}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#f5f5f5",
  },
};
