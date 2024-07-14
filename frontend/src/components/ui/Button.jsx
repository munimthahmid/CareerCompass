function Button({ children, onClick, type }) {
  const baseClasses =
    "text-inherit uppercase py-3 px-6 font-inherit text-lg border-none rounded cursor-pointer";
  const primaryClasses =
    "font-bold bg-var-color-brand--2 text-var-color-dark--1";
  const backClasses = "font-semibold bg-none border border-current";
  const positionClasses =
    "font-bold absolute z-1000 text-base bottom-16 left-1/2 transform -translate-x-1/2 bg-var-color-brand--2 text-var-color-dark--1 shadow-lg";

  const typeClasses =
    type === "primary"
      ? primaryClasses
      : type === "back"
        ? backClasses
        : type === "position"
          ? positionClasses
          : "";

  return (
    <button onClick={onClick} className={`${baseClasses} ${typeClasses}`}>
      {children}
    </button>
  );
}

export default Button;
