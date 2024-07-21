import PageNav from "../../components/PageNav";
import useSignup from "../../hooks/useSignup";
import Progressbar from "../../components/Progressbar";
import SecondStep from "../../components/SignUp/SecondStep"; // Import the SecondStep component
import ThirdStep from "../../components/SignUp/ThirdStep";
import UserPersonalInformation from "../../components/SignUp/UserPersonalInformation";
import UserProfessionalInformation from "../../components/SignUp/UserProfessionalInformation";
const Signup = () => {
  const {
    formData,
    showPassword,
    togglePasswordVisibility,
    step,
    setStep,
    handleChange,
    handleNext,
  } = useSignup();
  const labelClass = "block careercompass-text mb-2";

  const baseClass =
    "px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-black";
  return (
    <main className="page-container">
      <PageNav />

      <div className="mx-auto max-w-270">
        <div>
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <h1 className="text-center mb-4 text-3xl font-bold careercompass-bg text-sky-950">
                Create Account
              </h1>
              <Progressbar step={step} />
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Professional Information"}
                </h3>
              </div>
              {step === 1 && <UserPersonalInformation />}
              {step === 2 && <UserProfessionalInformation />}
              {step === 3 && <ThirdStep labelClass={labelClass} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
