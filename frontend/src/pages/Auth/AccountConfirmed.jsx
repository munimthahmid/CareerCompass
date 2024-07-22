import { useNavigate } from "react-router-dom";
import PageNav from "../../components/PageNav/PageNav";

export default function AccountConfirmed() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <main className="page-container">
      <PageNav />

      <div className="flex flex-col items-center">
        <img
          src="public/assets/icons/confirmed.svg"
          className="mx-auto w-[150] h-[150] m-6"
        />
        <h1 className="text-sky-950 text-3xl font-bold tracking-wide m-0.1">
          Your account has been confirmed!
        </h1>
        <p className="tracking-wide text-gray-500 text-sm">
          Login to get started with CareerCompass
        </p>
        <button
          className="px-5 py-3 bg-white-500 rounded-lg w-1/3 mt-6 careercompass-border border-2 hover:careercompass-bg font-bold text-black text-2xl hover:text-white duration-300"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </main>
  );
}
