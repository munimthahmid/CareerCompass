import FieldOfExpertiseList from "../../components/Mentor/FieldOfExpertiseList";
import useSignup from "../../hooks/useSignup";
function MentorProfessionalInformation({ setStep, onChange, formData }) {
  const {
    fieldOfInterestOptions,
    setFieldOfInterestOptions,
    startDate,
    handleDateSelect,
    listOfJob,
    setListofJob,
    handleBack,
    handleSubmitSecondPage,
  } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <div className="p-7">
      <form onSubmit={handleSubmit}>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="currentRole"
            >
              Current Role
            </label>
            <div className="relative">
              <span className="absolute left-4.5 top-4">
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                      fill=""
                    />
                  </g>
                </svg>
              </span>
              <input
                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type="text"
                name="currentRole"
                id="currentRole"
                placeholder="ex. Software Engineer Manager"
                onChange={(e) => onChange("currentRole", e.target.value)}
                value={formData.currentRole}
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="currentCompany"
            >
              Company Name
            </label>
            <input
              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              type="text"
              name="currentCompany"
              id="currentCompany"
              placeholder="ex. Google"
              onChange={(e) => onChange("currentCompany", e.target.value)}
              value={formData.currentCompany}
            />
          </div>
        </div>

        <div className="mb-5.5">
          <label
            className="mb-3 block text-sm font-medium text-black dark:text-white"
            htmlFor="yearsOfExperience"
          >
            Yeras Of Experience
          </label>
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="number"
            name="yearsOfExperience"
            id="yearsOfExperience"
            placeholder="ex. 6"
            onChange={(e) => onChange("yearsOfExperience", e.target.value)}
            value={formData.yearsOfExperience}
          />
        </div>
        <div className="mb-5.5">
          <FieldOfExpertiseList
            onChange={onChange}
            formData={formData}
            options={listOfJob}
            setOptions={setListofJob}
            selectedItems={formData.expertise}
          />
        </div>

        <div className="mb-5.5">
          <label
            className="mb-3 block text-sm font-medium text-black dark:text-white"
            htmlFor="mentorshipFee"
          >
            Mentorship Fee (Per Session)
          </label>
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="mentorshipFee"
            id="mentorshipFee"
            placeholder="ex. 10$"
            onChange={(e) => onChange("mentorshipFee", e.target.value)}
            value={formData.mentorshipFee}
          />
        </div>
        {/* Will Replace it with Multiple File Upload Later */}
        <div className="mb-5.5">
          <label
            className="mb-3 block text-sm font-medium text-black dark:text-white"
            htmlFor="profilePicture"
          >
            Certificates
          </label>
          <input
            type="file"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            onChange={(e) => onChange("certifications", e.target.value)}
            value={formData.certifications}
          />
        </div>

        <div className="flex justify-end gap-4.5">
          <button
            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            type="submit"
            onClick={() => setStep(1)}
          >
            Back
          </button>
          <button
            className="flex justify-center rounded bg-teal-500 py-2 px-6 font-medium text-gray hover:bg-opacity-90"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default MentorProfessionalInformation;
