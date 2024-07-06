import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li>
            <Link to="/profile" className="block py-2">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="block py-2">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/mentorship" className="block py-2">
              Mentorship
            </Link>
          </li>
          <li>
            <Link to="/resume" className="block py-2">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/interview" className="block py-2">
              Interview
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
