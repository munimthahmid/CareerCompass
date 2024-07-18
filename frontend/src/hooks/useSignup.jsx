import { SignUpContext } from "../context/SignUpContext";
import { useContext } from "react";
function useSignup() {
  const context = useContext(SignUpContext);
  console.log(context);

  if (context === undefined)
    throw new Error("SignUpContext was used outside SignUpProvider");
  return context;
}

export default useSignup;
