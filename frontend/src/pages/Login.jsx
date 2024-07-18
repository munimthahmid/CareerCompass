import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  function handleLogin(e) {
    e.preventDefault();
    console.log("Ehllo");
    login(email, password);
  }

  function handleCrossClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <main className="page-container">
      <PageNav />
      <div className="flex items-center justify-center text-black">
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          <div className="p-6 md:p-20">
            <h2 className="font-mono mb-5 text-6xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 text-lg font-sans  text-gray-600">
              Log in to your account to continue sky rocketing your career
              growth!
            </p>
            <input
              type="email"
              className="w-full p-4  rounded-md placeholder:font-serif placeholder:font-light placeholder:text-lg text-lg mb-4 bg-white border-gray-300 border"
              placeholder="Enter your email address"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="w-full p-4  rounded-md placeholder:font-serif placeholder:font-light placeholder:text-lg text-lg mb-4 bg-white border-gray-300 border"
              placeholder="Enter your password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <div className="font-light text-cyan-850">Forgot password?</div>

              <button
                className="w-full md:w-auto flex justify-center items-center px-5 py-3 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-teal-500 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                onClick={handleLogin}
              >
                <span>Login</span>
              </button>
            </div>

            <div className="mt-12 border-b border-b-gray-300"></div>

            <p className="py-6 text-lg text-center text-gray-800">
              or log in with
            </p>

            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-2 space-x-3 border rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img
                  src="public/assets/images/facebook.png"
                  alt=""
                  className="w-9"
                />
                <span className="font-semibold">Facebook</span>
              </button>
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img
                  src="public/assets/images/google.png"
                  alt=""
                  className="w-9"
                />
                <span className="font-semibold">Google</span>
              </button>
            </div>
          </div>

          <img
            src="public/assets/images/loginSideBar.jpg"
            alt=""
            className="w-[350px] hidden md:block"
          />

          <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
            <img
              src="public/assets/Icons/cross.svg"
              onClick={handleCrossClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
