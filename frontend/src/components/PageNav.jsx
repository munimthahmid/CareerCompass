import { NavLink } from "react-router-dom";
import Logo from "./ui/Logo";
import { useAuth } from "../context/AuthContext";
import User from "./User";
function AppNav({ isHome = false }) {
  const homeClass = !isHome ? " text-sky-950" : "";
  const baseLinkClasses =
    "block text-inherit no-underline font-lato font-bold text-base font-bold py-2 px-4 rounded-md text-xl md:text-2xl lg:text-3xl xl:text-3xl" +
    homeClass;
  const activeLinkClasses = "bg-var-color-dark--0";
  const hoverclass = "hover:text-teal-500";

  const logoClass =
    "font-bold py-2 px-2 rounded-md text-xl md:text-2xl lg:text-4xl xl:text-5xl font-lato";

  const { isAuthenticated } = useAuth();

  return (
    <nav className="mt-4 mb-8 flex flex-row justify-between">
      <NavLink
        to="/"
        className="flex items-center
      justify-start space-x-4"
      >
        <img
          src="/icon.jpg"
          alt="CareerCompass logo"
          className="rounded-md"
          width={50}
          height={50} // Add this line for better control
        />
        <h1
          className={`${logoClass} ${isHome ? "text-teal-500" : "text-sky-950"}`}
        >
          CareerCompass
        </h1>
      </NavLink>
      <div>
        <ul className="list-none flex bg-var-color-dark--2 rounded-lg ">
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${baseLinkClasses} ${hoverclass} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `${baseLinkClasses} text- ${hoverclass} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interview"
              className={({ isActive }) =>
                `${baseLinkClasses} ${hoverclass} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Interview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentorship"
              className={({ isActive }) =>
                `${baseLinkClasses} ${hoverclass} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Mentorship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${baseLinkClasses} ${hoverclass} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
      {!isAuthenticated ? (
        <ul className="flex">
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""} bg-teal-500 text-white hover:bg-black mr-2 active:bg-black`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""} bg-gray-600 text-white hover:bg-black active:bg-black `
              }
            >
              Signup
            </NavLink>
          </li>
        </ul>
      ) : (
        <User />
      )}
    </nav>
  );
}

export default AppNav;
