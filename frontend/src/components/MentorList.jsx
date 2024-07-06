import React from "react";

const MentorList = ({ mentors }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold">Mentors</h2>

      <h3>Mentor List</h3>
      {/* <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id} className="border-b py-2">
            {mentor.name} - {mentor.expertise}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MentorList;
