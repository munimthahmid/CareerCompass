import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function User() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className="bg-teal-600 p-4 rounded-lg z-50 shadow-xl text-base font-semibold flex items-center gap-4">
      <img src={user.avatar} alt={user.name} className="rounded-full h-16" />
      <span>Welcome, {user.name}</span>
      <button
        onClick={(e) => handleClick(e)}
        className="bg-gray-900 rounded-lg border-none px-3 py-2 text-white font-semibold text-sm uppercase cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default User;
