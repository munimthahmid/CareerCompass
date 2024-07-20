import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import SelectItems from "./src/components/SignUp/SelectItems";
import "./src/css/index.css";
import Progressbar from "./src/components/Progressbar";
import { SignUpProvider } from "./src/context/SignUpContext";
import ConfirmAccount from "./src/pages/ConfirmAccount";
import AccountConfirmed from "./src/pages/AccountConfirmed";
import DefaultLayout from "./src/layout/DefaultLayout";
import Loader from "./src/common/Loader";
import PageTitle from "./src/components/PageTitle";
import SignIn from "./src/pages/Authentication/SignIn";
import SignUp from "./src/pages/Authentication/SignUp";
import Calendar from "./src/pages/Calendar";
import Chart from "./src/pages/Chart";
import ECommerce from "./src/pages/Dashboard/ECommerce";
import FormElements from "./src/pages/Form/FormElements";
import FormLayout from "./src/pages/Form/FormLayout";
import Settings from "./src/pages/Settings";
import Tables from "./src/pages/Tables";
import Alerts from "./src/pages/UiElements/Alerts";
import Buttons from "./src/pages/UiElements/Buttons";
import AdminProfile from "./src/pages/AdminProfile";
import MentorApplication from "./src/pages/MentorApplication";

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
            <Route path="applyAsMentor" element={<MentorApplication />} />

            <Route path="admin" element={<DefaultLayout />}>
              <Route
                index
                element={
                  <>
                    <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <ECommerce />
                  </>
                }
              />
              <Route
                path="calendar"
                element={
                  <>
                    <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Calendar />
                  </>
                }
              />
              <Route
                path="profile"
                element={
                  <>
                    <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <AdminProfile />
                  </>
                }
              />
              <Route
                path="forms/form-elements"
                element={
                  <>
                    <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <FormElements />
                  </>
                }
              />
              <Route
                path="forms/form-layout"
                element={
                  <>
                    <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <FormLayout />
                  </>
                }
              />
              <Route
                path="tables"
                element={
                  <>
                    <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Tables />
                  </>
                }
              />
              <Route
                path="settings"
                element={
                  <>
                    <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Settings />
                  </>
                }
              />
              <Route
                path="chart"
                element={
                  <>
                    <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Chart />
                  </>
                }
              />
              <Route
                path="ui/alerts"
                element={
                  <>
                    <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Alerts />
                  </>
                }
              />
              <Route
                path="ui/buttons"
                element={
                  <>
                    <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Buttons />
                  </>
                }
              />
              <Route
                path="auth/signin"
                element={
                  <>
                    <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <SignIn />
                  </>
                }
              />
              <Route
                path="auth/signup"
                element={
                  <>
                    <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <SignUp />
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
