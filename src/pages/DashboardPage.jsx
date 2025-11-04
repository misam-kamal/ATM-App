import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h1>
            Welcome back, {user.first_name} {user.last_name}! 👋
          </h1>
          <p>
            Current balance: <b>{user.balance} ILS</b>
          </p>
        </>
      ) : (
        <h1>Welcome!</h1>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/deposit">Deposite</Link>
        <Link to="/withdraw">Withdraw</Link>
        <Link to="/watchlist">WatchList</Link>
        <Link to="/history">History</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}
