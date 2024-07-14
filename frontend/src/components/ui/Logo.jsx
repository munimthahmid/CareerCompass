import { Link, NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="flex items-top space-x-4">
      <img
        src="public/icon.jpg"
        alt="CareerCompass logo"
        className="rounded-md"
        width={50}
      />
      <h1 className="no-underline uppercase font-bold py-2 px-4 rounded-md text-xl md:text-2xl lg:text-3xl">
        CareerCompass
      </h1>
    </NavLink>
  );
}

export default Logo;
