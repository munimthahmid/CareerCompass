import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });

  function togglePasswordVisibility() {
    setShowPassword((showPassword) => !showPassword);
  }

  function handleChange(e) {
    const targetName = e.target.id;
    const value = e.target.value;
    console.log(targetName);

    setFormData((prev) => ({ ...prev, [targetName]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Register to CareerCompass!
        </h2>
        {/* <p className="text-gray-600">
          Registering will help you do more for them
        </p> */}
      </div>
      <form
        className="w-full max-w-lg space-y-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Example Name"
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Example Name"
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="user"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
