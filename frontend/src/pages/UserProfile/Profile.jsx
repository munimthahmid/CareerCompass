import React from "react";
import MainLayout from "../../components/MainLayout";
import UserProfile from "../../components/UserProfile";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const user = { name: "John Doe", email: "john@example.com" }; // Dummy data

  return (
    <MainLayout>
      <Outlet />
      <UserProfile user={user} />
    </MainLayout>
  );
};

export default Profile;
