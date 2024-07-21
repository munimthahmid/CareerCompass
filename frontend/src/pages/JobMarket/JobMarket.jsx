import React from "react";
import MainLayout from "../../components/MainLayout";
import JobListing from "../../components/JobListing";
import useFetch from "../../hooks/useFetch";

const JobMarket = () => {
  //   const { data, loading, error } = useFetch("http://localhost:8080/api/jobs");

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  return (
    <MainLayout>
      <section className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold">Job Listings</h2>
        {/* {data.map((job) => (
          <JobListing key={job.id} job={job} />
        ))} */}
      </section>
    </MainLayout>
  );
};

export default JobMarket;
