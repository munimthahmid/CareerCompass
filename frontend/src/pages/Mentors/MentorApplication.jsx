import PageNav from "../../components/PageNav";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import userThree from "../../images/user/user-03.png";
import { useState } from "react";
import MentorPersonalInformation from "../../components/Mentor/MentorPersonalInformation";
import MentorProfessionalInformation from "../../components/Mentor/MentorProfessionalInformation";
export default function MentorApplication() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    username: "",
    dateOfBirth: null,
    gender: "",
    profilePicture: "",
    bio: [],
    expertise: [],
    yearsOfExperience: null,
    certifications: [],
    currentRole: "",
    currentCompany: "",
    mentorshipFee: null,
  });

  function handleChange(name, value) {
    console.log(name);
    console.log(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <main className="page-container ">
      <PageNav />
      <>
        <div className="mx-auto max-w-270">
          {/* <Breadcrumb pageName="Mentor Application" /> */}

          <div>
            {/* Details */}
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <h1 className="text-center mb-4 text-3xl font-bold careercompass-bg text-sky-950">
                  Mentor Application
                </h1>
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    {step === 1
                      ? "Personal Information"
                      : "Professional Information"}
                  </h3>
                </div>
                {step === 1 && (
                  <MentorPersonalInformation
                    onChange={handleChange}
                    setStep={setStep}
                    formData={formData}
                  />
                )}
                {step === 2 && (
                  <MentorProfessionalInformation
                    onChange={handleChange}
                    setStep={setStep}
                    formData={formData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
