import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectItems from "./SelectItems";
const SecondStep = ({
  formData,
  handleChange,
  handleBack,
  handleNext,
  handleSubmit,
}) => {
  const [interests, setInterests] = useState([
    "Science",
    "Technology",
    "Web",
    "Finance",
    "Crypto",
    "Web3",
    "Javascript",
    "Spring",
  ]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [fieldOfInterestOptions, setFieldOfInterestOptions] = useState([
    "Accounting",
    "Advertising",
    "Aerospace Engineering",
    "Agriculture",
    "Anthropology",
    "Architecture",
    "Artificial Intelligence",
    "Astronomy",
    "Automotive Technology",
    "Banking",
    "Biochemistry",
    "Biomedical Engineering",
    "Biotechnology",
    "Business Administration",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Communications",
    "Computer Science",
    "Construction Management",
    "Counseling",
    "Criminal Justice",
    "Cybersecurity",
    "Data Analysis",
    "Data Science",
    "Dentistry",
    "Design",
    "Digital Marketing",
    "Ecology",
    "Economics",
    "Education",
    "Electrical Engineering",
    "Environmental Science",
    "Event Planning",
    "Fashion Design",
    "Finance",
    "Food Science",
    "Forensic Science",
    "Game Development",
    "Genetics",
    "Geology",
    "Graphic Design",
    "Healthcare Administration",
    "Hospitality Management",
    "Human Resources",
    "Information Technology",
    "Interior Design",
    "Journalism",
    "Law",
    "Library Science",
    "Logistics",
    "Machine Learning",
    "Marine Biology",
    "Marketing",
    "Mechanical Engineering",
    "Media Production",
    "Medical Technology",
    "Medicine",
    "Microbiology",
    "Music Production",
    "Nanotechnology",
    "Network Administration",
    "Nursing",
    "Nutrition",
    "Occupational Therapy",
    "Oceanography",
    "Operations Management",
    "Optometry",
    "Pharmaceuticals",
    "Pharmacy",
    "Philosophy",
    "Photography",
    "Physical Therapy",
    "Physics",
    "Political Science",
    "Project Management",
    "Psychiatry",
    "Psychology",
    "Public Health",
    "Public Relations",
    "Publishing",
    "Real Estate",
    "Renewable Energy",
    "Robotics",
    "Social Work",
    "Software Engineering",
    "Speech Therapy",
    "Sports Management",
    "Statistics",
    "Supply Chain Management",
    "Teaching",
    "Tourism",
    "Translation Services",
    "Urban Planning",
    "Veterinary Medicine",
    "Video Production",
    "Web Development",
    "Wildlife Conservation",
    "Writing",
    "Zoology",
  ]);
  const [listOfJob, setListofJob] = useState([
    "Academic Librarian",
    "Accountant",
    "Accounting Technician",
    "Actuary",
    "Adult Nurse",
    "Advertising Account executive",
    "Advertising Account planner",
    "Advertising Copywriter",
    "Advice Worker",
    "Aeronautical Engineer",
    "Agricultural Consultant",
    "Agricultural Manager",
    "Aid Worker/Humanitarian Worker",
    "Air Traffic Controller",
    "Airline Cabin Crew",
    "Amenity Horticulturist",
    "Analytical Chemist",
    "Animal Nutritionist",
    "Animator",
    "Archaeologist",
    "Architect",
    "Architectural Technologist",
    "Archivist",
    "Armed Forces Officer",
    "AromaTherapist",
    "Art Therapist",
    "Arts Administrator",
    "Auditor",
    "Automotive Engineer",
    "Barrister",
    "Barrister's Clerk",
    "Bid Manager",
    "Bilingual Secretary",
    "Biomedical Engineer",
    "Biomedical Scientist",
    "Biotechnologist",
    "Border Force Officer",
    "Brand Manager",
    "Broadcasting Presenter",
    "Building Control Officer/Surveyor",
    "Building Services Engineer",
    "Building Surveyor",
    "Business Analyst",
    "Camera Operator",
    "Careers Adviser (Higher Education)",
    "Careers Adviser",
    "Careers Consultant",
    "Cartographer",
    "Catering Manager",
    "Charities Administrator",
    "Charities Fundraiser",
    "Chemical (Process) Engineer",
    "Child PsychoTherapist",
    "Children's Nurse",
    "Chiropractor",
    "Civil Engineer",
    "Civil Service Administrator",
    "Clinical Biochemist",
    "Clinical Cytogeneticist",
    "Clinical Microbiologist",
    "Clinical Molecular Geneticist",
    "Clinical Research Associate",
    "Clinical Scientist",
    "Clothing Technologist",
    "Colour Technologist",
    "Commercial Airline Pilot",
    "Commercial Horticulturist",
    "Commercial/Residential Surveyor",
    "Commissioning Editor",
    "Commissioning Engineer",
    "Commodity Broker",
    "Communications Engineer",
    "Community Arts Worker",
    "Community Education Officer",
    "Community Worker",
    "Company Secretary",
    "Computer Sales Support",
    "Computer Scientist",
    "Conference Organiser",
    "Consultant",
    "Consumer Rights Adviser",
    "Control and Instrumentation Engineer",
    "Corporate Banker",
    "Corporate Treasurer",
    "Counsellor",
    "Court Reporter/Verbatim Reporter",
    "Credit Analyst",
    "Crown Prosecution Service lawyer",
    "Crystallographer",
    "Curator",
    "Customs Officer",
    "Cyber Security Specialist",
    "Dance Movement PsychoTherapist",
    "Data Analyst",
    "Data Scientist",
    "Data Visualisation Analyst",
    "Database Administrator",
    "Debt/Dinance Adviser",
    "Dental Hygienist",
    "Dentist",
    "Design Engineer",
    "Design Manager (Construction)",
    "DevOps Engineer",
    "Dietitian",
    "Diplomatic Service",
    "Doctor (GP)",
    "Doctor (Hospital)",
    "DramaTherapist",
    "Economist",
    "Editorial Assistant",
    "Education Administrator",
    "Electrical Engineer",
    "Electronics Engineer",
    "Employment Advice Worker",
    "Energy Conservation Officer",
    "Energy Consultant",
    "Engineering Geologist",
    "Environmental Education Officer",
    "Environmental Health Officer",
    "Environmental Manager",
    "Environmental Scientist",
    "Equal Opportunities Officer",
    "Equality and Diversity Officer",
    "Ergonomist",
    "Estate Agent",
    "Estimator",
    "European Commission Administrators",
    "Exhibition Display Designer",
    "Exhibition Organiser",
    "Exploration Geologist",
    "Facilities Manager",
    "Field Trials Officer",
    "Financial Manager",
    "Fire Engineer",
    "Firefighter",
    "Fisheries Enforcement Officer",
    "Fitness Centre Manager",
    "Food Scientist",
    "Food Technologist",
    "Forensic Scientist",
    "Freight Forwarder",
    "Geneticist",
    "Geographical Information Systems Manager",
    "Geomatics/Land Surveyor",
    "Government Lawyer",
    "Government Research Officer",
    "Graphic Designer",
    "Health and Safety Adviser",
    "Health and Safety Inspector",
    "Health Promotion Specialist",
    "Health Service Manager",
    "Health Visitor",
    "Herbalist",
    "Heritage Manager",
    "Higher Education Administrator",
    "Higher Education Advice Worker",
    "Homeless Support Worker",
    "Horticultural Consultant",
    "Hotel Manager",
    "Housing Adviser",
    "Human Resources Officer",
    "Hydrologist",
    "Illustrator",
    "Immigration Officer",
    "Immunologist",
    "Industrial/Product Designer",
    "Information Scientist",
    "Information Systems Manager",
    "Information Technology/Software Trainers",
    "Insurance Broker",
    "Insurance Claims Inspector",
    "Insurance Risk Surveyor",
    "Insurance Underwriter",
    "Interpreter",
    "Investment Analyst",
    "Investment Banker - Corporate Finance",
    "Investment Banker - Operations",
    "Investment FUnd Manager",
    "IT Consultant",
    "IT Support Analyst",
    "Journalist",
    "Laboratory Technician",
    "Land-based Engineer",
    "Landscape Architect",
    "Learning Disability Nurse",
    "Learning Mentor",
    "Lecturer (Adult Education)",
    "Lecturer (Further Education)",
    "Lecturer (Higher Education)",
    "Legal Executive",
    "Leisure Centre Manager",
    "Licensed Conveyancer",
    "Local Government administrator",
    "Local Government lawyer",
    "Logistics/Distribution Manager",
    "Magazine Features Editor",
    "Magazine Journalist",
    "Maintenance Engineer",
    "Management accountant",
    "Manufacturing Engineer",
    "Manufacturing Machine Operator",
    "Manufacturing Toolmaker",
    "Marine Scientist",
    "Market Research Analyst",
    "Market Research Executive",
    "Marketing Assistant",
    "Marketing Executive",
    "Marketing Manager (Direct)",
    "Marketing Manager (Social Media)",
    "Materials Engineer",
    "Materials Specialist",
    "Mechanical Engineer",
    "Media Analyst",
    "Media Buyer",
    "Media Planner",
    "Medical Physicist",
    "Medical Representative",
    "Mental Health Nurse",
    "Metallurgist",
    "Meteorologist",
    "Microbiologist",
    "Midwife",
    "Mining Engineer",
    "Mobile Developer",
    "Multimedia Programmer",
    "Multimedia Specialists",
    "Museum Education Officer",
    "Museum/Gallery Exhibition Officer",
    "Music Therapist",
    "Nanoscientist",
    "Nature Conservation Officer",
    "Naval Architect",
    "Network Administrator",
    "Nurse",
    "Nutritional Therapist",
    "Nutritionist",
    "Occupational Therapist",
    "Oceanographer",
    "Office Manager",
    "Operational Researcher",
    "Orthoptist",
    "Outdoor Pursuits Manager",
    "Packaging Technologist",
    "Paramedic",
    "Patent Attorney",
    "Patent Examiner",
    "Pension Scheme Manager",
    "Personal Assistant",
    "Petroleum Engineer",
    "Pharmacist",
    "Pharmacologist",
    "Pharmacovigilance Officer",
    "Photographer",
    "PhysioTherapist",
    "Picture Researcher",
    "Planning and Development Surveyor",
    "Planning Technician",
    "Plant Breeder",
    "Police Officer",
    "Political Party Agent",
    "Political Researcher",
    "Practice nurse",
    "Press Photographer",
    "Press Sub-editor",
    "Prison Officer",
    "Private Music Teacher",
    "Probation Officer",
    "Product Development Scientist",
    "Production Manager",
    "Programme Researcher",
    "Project Manager",
    "Psychologist (Clinical)",
    "Psychologist (Educational)",
    "PsychoTherapist",
    "Public Affairs Consultant (Lobbyist)",
    "Public Affairs Consultant (Research)",
    "Public House Manager",
    "Public Librarian",
    "Public Relations (PR) Officer",
    "QA Analyst",
    "Quality Assurance Manager",
    "Quantity Surveyor",
    "Records Manager",
    "Recruitment Consultant",
    "Recycling Officer",
    "Regulatory Affairs Officer",
    "Research Chemist",
    "Research Scientist",
    "Restaurant Manager",
    "Retail Banker",
    "Retail Buyer",
    "Retail Manager",
    "Retail Merchandiser",
    "Retail Pharmacist",
    "Sales Executive",
    "Scene of Crime Officer",
    "Secretary",
    "Seismic Interpreter",
    "Site Engineer",
    "Site Manager",
    "Social Researcher",
    "Social Worker",
    "Software Developer",
    "Software Engineer",
    "Soil Scientist",
    "Solicitor",
    "Speech and Language Therapist",
    "Sports Coach",
    "Sports Development Officer",
    "Sports Therapist",
    "Statistician",
    "Stockbroker",
    "Structural Engineer",
    "Systems Analyst",
    "Systems Developer",
    "Tax Inspector",
    "Teacher (Nursery Years)",
    "Teacher (Primary)",
    "Teacher (Secondary)",
    "Teacher (Special Educational Needs)",
    "Teaching/Classroom Assistant",
    "Technical Author",
    "Technical Sales Engineer",
    "TEFL/TESL Teacher",
    "Television Production Assistant",
    "Test Automation Developer",
    "Tour Guide",
    "Tour Operator",
    "Tour/Holiday Representative",
    "Tourism Officer",
    "Tourist Information Manager",
    "Town and Country Planner",
    "Toxicologist",
    "Trade Union Official",
    "Trade Union Research Officer",
    "Trader",
    "Trading Standards Officer",
    "Training and Development Officer",
    "Translator",
    "Transportation Planner",
    "Travel Agent",
    "TV/Film/Theatre Set Designer",
    "UX Designer",
    "Validation Engineer",
    "Veterinary Nurse",
    "Veterinary Surgeon",
    "Video Game Designer",
    "Video Game Developer",
    "Volunteer Work Organiser",
    "Waste Management Officer",
    "Water Conservation Officer",
    "Water Engineer",
    "Web Designer",
    "Web Developer",
    "Welfare Rights Adviser",
    "Writer",
    "Youth Worker",
  ]);

  //   useEffect(() => {
  //     // Fetch the fields of interest from an API
  //     const fetchInterests = async () => {
  //       try {
  //         const response = await fetch("http://localhost:8080/api/interests");
  //         const data = await response.json();
  //         setInterests(data);
  //       } catch (error) {
  //         console.error("Error fetching interests:", error);
  //       }
  //     };

  //     fetchInterests();
  //   }, []);

  function handleDateSelect(e) {
    setStartDate(e);
    handleChange(e);
  }

  const handleSubmitSecondPage = (e) => {
    console.log("Submit pressed");
    handleNext({ ...formData, selectedInterests });
    // handleSubmit(e);
  };

  return (
    <>
      <h1 className="mt-4 text">Additional Info</h1>
      <div
        className="w-full max-w-lg space-y-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="dob">
            Date of Birth
          </label>

          <div>
            <DatePicker
              selected={startDate}
              onChange={(e) => handleDateSelect(e)}
              onSelect={(e) => handleDateSelect(e)}
              dateFormat="dd/MM/yyyy"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="dd/mm/yyyy"
              popperClassName="react-datepicker-popper"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="lastName">
            Career Status
          </label>
          <div className="relative">
            <select
              id="careerStatus"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out hover:shadow-lg"
              value={formData.careerStatus}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select your status</option>
              <option value="student">Student</option>
              <option value="working">Working Professional</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Field of Interest
          </label>
          <SelectItems
            onChange={handleChange}
            formData={formData}
            options={fieldOfInterestOptions}
            setOptions={setFieldOfInterestOptions}
            type="fieldOfInterest"
            selectedItems={formData.selectedInterests}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Career Goal
          </label>
          <SelectItems
            onChange={handleChange}
            formData={formData}
            options={listOfJob}
            setOptions={setListofJob}
            type="careerGoal"
            selectedItems={formData.careerGoals}
          />
        </div>

        <div className="flex flex-row justify-center  ">
          <button
            type="button"
            onClick={() => handleBack(formData)}
            className="w-64 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 m-4"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleSubmitSecondPage}
            className="w-64 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 m-4"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
SecondStep.propTypes = {
  formData: PropTypes.shape({
    dob: PropTypes.date,
    careerStatus: PropTypes.string,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    careerGoals: PropTypes.array,
    selectedInterests: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SecondStep;
