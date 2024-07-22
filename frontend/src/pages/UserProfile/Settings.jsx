import { useState } from "react";
import PageNav from "../../components/PageNav/PageNav";
import PersonalInformationSettings from "../../components/UserAccountSettings/PersonalInformationSettings";
import ProfilePictureSettings from "../../components/UserAccountSettings/ProfilePictureSettings";
import ProfessionalInformationSettings from "../../components/UserAccountSettings/ProfessionalInformationSettings";
import userThree from "../../images/user/user-03.png";

export default function Settings() {
  const [step, setStep] = useState(1);

  return (
    <main className="page-container ">
      <PageNav />
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-5 gap-8">
          {step === 1 && <PersonalInformationSettings setStep={setStep} />}

          {step === 2 && <ProfessionalInformationSettings setStep={setStep} />}
          <ProfilePictureSettings />
        </div>
      </div>
    </main>
  );
}
