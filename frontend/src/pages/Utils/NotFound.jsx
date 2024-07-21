import React from "react";
import MainLayout from "../../components/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <section className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
      </section>
    </MainLayout>
  );
};

export default NotFound;
