import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import JobMarket from "./src/pages/JobMarket";
import Resume from "./src/pages/Resume";
import Interview from "./src/pages/Interview";
import Mentorship from "./src/pages/Mentorship";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import NotFound from "./src/pages/NotFound";
import { AuthProvider } from "./src/context/AuthContext";

import "./src/styles/index.css";

const App = () => {
  console.log("Hello!");
  return (
    // <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<JobMarket />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    /* </AuthProvider> */
  );
};

export default App;
