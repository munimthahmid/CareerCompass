import React from "react";

const JobListing = ({ job }) => {
  return (
    <div className="border-b py-2">
      <h3>Job Listing</h3>
      {/* <h3 className="text-xl">{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p> */}
    </div>
  );
};

export default JobListing;
