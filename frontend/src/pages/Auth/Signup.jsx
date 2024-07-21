import PageNav from "../../components/PageNav";
import useSignup from "../../hooks/useSignup";
import Progressbar from "../../components/Progressbar";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons
import SecondStep from "../../components/SignUp/SecondStep"; // Import the SecondStep component
import ThirdStep from "../../components/SignUp/ThirdStep";
const Signup = () => {
  const {
    formData,
    showPassword,
    togglePasswordVisibility,
    step,
    handleChange,
    handleNext,
  } = useSignup();
  const labelClass = "block text-teal-500 mb-2";

  const baseClass =
    "px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-black";
  return (
    <main className="page-container">
      <PageNav />
      <div className="min-h-screen flex flex-col justify-center items-center ">
        <div className="text-center mb-4 flex flex-col justify-center items-center m-4">
          <img src="public/icon.jpg" alt="CareerCompass logo" width={30} />
          <h2 className="text-3xl font-bold text-sky-500 mb-2">
            Create Account
          </h2>
        </div>
        <Progressbar step={step} />
        {step === 1 && (
          <>
            <h1 className="mt-4 text-xl">Basic Info</h1>
            <form className="space-y-6 w-full">
              <div className="rounded-lg p-8  flex flex-col gap-8 w-[54rem] mx-auto my-4 bg-slate-900">
                <div className="mb-4">
                  <label className={`${labelClass}`} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className={baseClass}
                    placeholder="Example Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-4">
                  <label className={`${labelClass}`} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className={baseClass}
                    placeholder="Example Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-4">
                  <label className={`${labelClass}`} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={baseClass}
                    value={formData.email}
                    placeholder="email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={`${labelClass}`} htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className={baseClass}
                    placeholder="user"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-teal-500 mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={(e) => handleChange(e)}
                      className={baseClass}
                      placeholder="123456"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-2 top-3 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleNext(formData)}
                    className="w-64 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 justify-center"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
        {step === 2 && <SecondStep labelClass={labelClass} />}
        {step === 3 && <ThirdStep labelClass={labelClass} />}
      </div>
    </main>
  );
};

export default Signup;
