import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./src/pages/Dashboard/Home";
import Profile from "./src/pages/UserProfile/Profile";
import Settings from "./src/pages/UserProfile/Settings";
import JobMarket from "./src/pages/JobMarket/JobMarket";
import Resume from "./src/pages/Resume/Resume";
import Interview from "./src/pages/Interview/Interview";
import Mentorship from "./src/pages/Mentors/Mentorship";
import Login from "./src/pages/Auth/Login";
import Signup from "./src/pages/Auth/Signup";
import NotFound from "./src/pages/Utils/NotFound";
import { AuthProvider } from "./src/context/AuthContext";
import SelectItems from "./src/components/SignUp/SelectItems";
import "./src/css/index.css";
import Progressbar from "./src/components/Progressbar";
import { SignUpProvider } from "./src/context/SignUpContext";
import ConfirmAccount from "./src/pages/Auth/ConfirmAccount";
import AccountConfirmed from "./src/pages/Auth/AccountConfirmed";
import DefaultLayout from "./src/layout/DefaultLayout";
import Loader from "./src/common/Loader";
import PageTitle from "./src/components/PageTitle";
import SignIn from "./src/pages/Authentication/SignIn";
import SignUp from "./src/pages/Authentication/SignUp";
import Calendar from "./src/pages/Utils/Calendar";
import Chart from "./src/pages/Utils/Chart";
import ECommerce from "./src/pages/admin/Dashboard/ECommerce";
import FormElements from "./src/pages/Form/FormElements";
import FormLayout from "./src/pages/Form/FormLayout";
import AdminSettings from "./src/pages/admin/AdminSettings";
import Tables from "./src/pages/Utils/Tables";
import Alerts from "./src/pages/UiElements/Alerts";
import Buttons from "./src/pages/UiElements/Buttons";
import AdminProfile from "./src/pages/admin/AdminProfile";
import MentorApplication from "./src/pages/Mentors/MentorApplication";
import MentorApplicationReceived from "./src/pages/Mentors/MentorApplicationReceived";
import MentorApplicationAccepted from "./src/pages/Mentors/MentorApplicationAccepted";
import MentorApplications from "./src/pages/admin/MentorApplications";
import MentorDetails from "./src/pages/admin/MentorDetails";
import { AdminProvider } from "./src/context/AdminContext";

const App = () => {
  return (
    <AuthProvider>
      <SignUpProvider>
        <BrowserRouter>
          <AdminProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />

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
              <Route
                path="mentorApplicationReceived"
                element={<MentorApplicationReceived />}
              />
              <Route
                path="mentorApplicationAccepted"
                element={<MentorApplicationAccepted />}
              />
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
                      <AdminSettings />
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

                <Route
                  path="mentorApplications"
                  element={
                    <>
                      <PageTitle title="Mentor Applications" />
                      <MentorApplications />
                    </>
                  }
                />
                <Route
                  path="mentorApplications/:username"
                  element={
                    <>
                      <PageTitle title="Mentor Details" />
                      <MentorDetails />
                    </>
                  }
                />
              </Route>
            </Routes>
          </AdminProvider>
        </BrowserRouter>
      </SignUpProvider>
    </AuthProvider>
  );
};

export default App;
