import React from "react";
import MainLayout from "../../components/MainLayout";
import MentorList from "../../components/Mentor/MentorList";

const Mentorship = () => {
  //   const { data, loading, error } = useFetch(
  //     "http://localhost:8080/api/mentors"
  //   );

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  return (
    <MainLayout>
      <MentorList />
      <h2>MentorShip Page</h2>
      <div>This is a div</div>
    </MainLayout>
  );
};

export default Mentorship;
