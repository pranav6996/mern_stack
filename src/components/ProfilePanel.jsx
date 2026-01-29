import { useNavigate } from "react-router-dom";

export default function ProfilePanel() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-panel">
      <p>Email: {user?.email}</p>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
