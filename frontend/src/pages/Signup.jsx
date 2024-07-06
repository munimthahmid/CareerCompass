import React from "react";
import MainLayout from "../components/MainLayout";

const Signup = () => {
  return (
    <MainLayout>
      <section className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="border p-2 w-full" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded">
            Sign Up
          </button>
        </form>
      </section>
    </MainLayout>
  );
};

export default Signup;
