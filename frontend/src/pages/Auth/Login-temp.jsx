import { useNavigate } from "react-router-dom";
import PageNav from "../../components/PageNav";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  function handleLogin(e) {
    e.preventDefault();

    login(email, password);
  }

  return (
    //for now minimum height is set to screen height, will change later if required
    <main className="page-container">
      <PageNav />
      <form className="bg-var-color-dark--2" onSubmit={handleLogin}>
        <div className="rounded-lg p-8  flex flex-col gap-8 w-[48rem] mx-auto my-32 bg-slate-900">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">
              Email address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-2 text-black rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full p-2 text-black rounded-md"
            />
          </div>

          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
