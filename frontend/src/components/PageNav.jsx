import { NavLink } from "react-router-dom";
import Logo from "./ui/Logo";
function AppNav() {
  const baseLinkClasses =
    "block text-inherit no-underline uppercase text-base font-bold py-2 px-8 rounded-md text-lg md:text-xl lg:text-2xl ";
  const activeLinkClasses = "bg-var-color-dark--0";
  const hoverclass = "hover:text-green-500";

  return (
    <nav className="mt-4 mb-8 flex flex-row justify-between">
      <Logo />
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
              `${baseLinkClasses} ${hoverclass} ${isActive ? activeLinkClasses : ""}`
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
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : ""} bg-teal-500 hover:bg-black mr-2 active:bg-black`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : ""} bg-gray-600 hover:bg-black active:bg-black `
            }
          >
            signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
