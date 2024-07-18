import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="flex items-center space-x-4">
      <img
        src="/icon.jpg"
        alt="CareerCompass logo"
        className="rounded-md"
        width={50}
        height={50} // Add this line for better control
      />
      <h1 className="uppercase font-bold py-2 px-4 rounded-md text-xl md:text-!2xl lg:text-4xl xl:text-!6xl">
        CareerCompass
      </h1>
    </NavLink>
  );
}

export default Logo;
