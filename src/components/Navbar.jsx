import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const user = localStorage.getItem("user")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <h2 className="logo">ChatApp</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* Show Login & Signup ONLY if user is NOT logged in */}
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Signup</Link>}

        {/* Show Chat & Logout ONLY if user IS logged in */}
        {user && <Link to="/chat">Chat</Link>}
        {user && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
