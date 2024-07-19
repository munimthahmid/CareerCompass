import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  useEffect(
    function () {
      if (isAdmin === false) navigate("/");
    },
    [isAdmin, navigate]
  );

  return isAdmin === false ? null : children;
}

export default ProtectedRoute;
