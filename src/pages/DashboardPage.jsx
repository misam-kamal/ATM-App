import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import "./DashboardPage.css"; 

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        {user ? (
          <>
            <h1>
              Welcome back, {user.first_name} {user.last_name}! 
            </h1>
            <p className={`balance ${user.balance > 0 ? "positive" : "zero"}`}>
              Current balance: <b>{user.balance} ILS</b>
            </p>
          </>
        ) : (
          <h1>Welcome!</h1>
        )}
      </header>

      <nav className="dashboard-nav">
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdraw</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/history">History</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <div className="logout-container">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}
