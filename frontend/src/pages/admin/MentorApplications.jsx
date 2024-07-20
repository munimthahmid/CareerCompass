import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import UserOne from "../../images/user/user-01.png";
import { Link } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
const MentorApplications = () => {
  const { mentorList } = useAdmin();
  function getHeader(obj) {
    return obj.fullName + " - " + obj.currentRole + " - " + obj.currentCompany;
  }

  function getFirstFiftyCharOfBio(bio) {
    let shortBio = "";
    for (let i = 0; i < 300; i++) {
      shortBio = shortBio + bio[i];
    }
    shortBio = shortBio + "...";
    return shortBio;
  }
  function handleClick(e) {
    e.preventDefault();
    console.log("Clicked!");
  }
  return (
    <>
      <Breadcrumb pageName="Mentor Applications" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          {/* <!-- Alerts Item --> */}

          {mentorList.map((mentor) => (
            <Link
              key={mentor.username}
              className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-4 py-5 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-6 rounded-lg cursor-pointer"
              to={`${mentor.username}`}
            >
              <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg ">
                <img src="../../src/images/user/user-01.png" alt="" />
              </div>
              <div className="w-full">
                <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
                  {getHeader(mentor)}
                </h5>
                <p className="text-base leading-relaxed text-body">
                  {getFirstFiftyCharOfBio(mentor.bio)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MentorApplications;
