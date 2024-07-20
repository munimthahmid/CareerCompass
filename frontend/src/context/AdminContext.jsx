import { createContext, useContext } from "react";

const AdminContext = createContext();
function AdminProvider({ children }) {
  const mentorList = [
    {
      fullName: "Munim Thahmid",
      email: "munimthahmid2@gmail.com",
      password: "1234",
      username: "munimthahmid",
      dateOfBirth: "Jul 2, 2024",
      gender: "USA",
      profilePicture: "C:\\fakepath\\profile-removebg-preview.png",
      bio: "Hi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very well Hi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very wellHi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very well",
      expertise: [
        "Advertising Copywriter",
        "Academic Librarian",
        "Air Traffic Controller",
        "Agricultural Consultant",
      ],
      yearsOfExperience: "1",
      certifications: "C:\\fakepath\\Problem-Specification.pdf",
      currentRole: "Software Engineer Intern",
      currentCompany: "Optimizely",
      mentorshipFee: "12",
      phoneNumber: "01830820943",
    },
    {
      fullName: "Munim Thahmid",
      email: "munimthahmid2@gmail.com",
      password: "1234",
      username: "munimthahmid",
      dateOfBirth: "Jul 2, 2024",
      gender: "USA",
      profilePicture: "C:\\fakepath\\profile-removebg-preview.png",
      bio: "Hi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very well Hi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very wellHi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very well",
      expertise: [
        "Advertising Copywriter",
        "Academic Librarian",
        "Air Traffic Controller",
        "Agricultural Consultant",
      ],
      yearsOfExperience: "1",
      certifications: "C:\\fakepath\\Problem-Specification.pdf",
      currentRole: "Software Engineer Intern",
      currentCompany: "Optimizely",
      mentorshipFee: "12",
      phoneNumber: "01830820943",
    },
    {
      fullName: "Munim Thahmid",
      email: "munimthahmid2@gmail.com",
      password: "1234",
      username: "munimthahmid",
      dateOfBirth: "Jul 2, 2024",
      gender: "USA",
      profilePicture: "C:\\fakepath\\profile-removebg-preview.png",
      bio: "Hi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very well Hi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very wellHi this is me. A very talentend and very hardworking person , now I want to become a mentor of your company so can you give me a hints of how to work hard and how to do something that is good and very well",
      expertise: [
        "Advertising Copywriter",
        "Academic Librarian",
        "Air Traffic Controller",
        "Agricultural Consultant",
      ],
      yearsOfExperience: "1",
      certifications: "C:\\fakepath\\Problem-Specification.pdf",
      currentRole: "Software Engineer Intern",
      currentCompany: "Optimizely",
      mentorshipFee: "12",
      phoneNumber: "01830820943",
    },
  ];
  return (
    <AdminContext.Provider value={{ mentorList }}>
      {children}
    </AdminContext.Provider>
  );
}

function useAdmin() {
  const context = useContext(AdminContext);

  if (context === undefined)
    throw new Error("AdminContext was used outside AdminProvider");
  return context;
}
export { useAdmin, AdminProvider };
