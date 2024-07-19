import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import JobMarket from "./pages/JobMarket";
import Resume from "./pages/Resume";
import Interview from "./pages/Interview";
import Mentorship from "./pages/Mentorship";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import SelectItems from "./components/SignUp/SelectItems";
import "./css/index.css";
import Progressbar from "./components/Progressbar";
import { SignUpProvider } from "./context/SignUpContext";
import ConfirmAccount from "./pages/ConfirmAccount";
import AccountConfirmed from "./pages/AccountConfirmed";
import DefaultLayout from "./layout/DefaultLayout";
import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Calendar from "./pages/Calendar";
import Chart from "./pages/Chart";
import ECommerce from "./pages/Dashboard/ECommerce";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Alerts from "./pages/UiElements/Alerts";
import Buttons from "./pages/UiElements/Buttons";
import AdminProfile from "./pages/AdminProfile";

const App = () => {
  return (
    <AuthProvider>
      <SignUpProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="xyz" element={<h1>Hello There!</h1>} />
            </Route>
            <Route path="/jobs" element={<JobMarket />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/progressbar" element={<Progressbar />} />
            <Route path="/interest" element={<SelectItems />} />
            <Route path="/confirmaccount" element={<ConfirmAccount />} />
            <Route path="/accountconfirmed" element={<AccountConfirmed />} />

            <Route path="admin" element={<DefaultLayout />}>
              <Route
                path="profile"
                element={
                  <>
                    <AdminProfile />
                  </>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </SignUpProvider>
    </AuthProvider>
  );
};

export default App;
