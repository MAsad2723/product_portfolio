import React from "react";
import Sidebar from "./components/Dashboard/Sidebar";
import ProfileDetails from "./components/Dashboard/ProfileDetails";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Dashboard/Main";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[20vw]"></div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ProfileDetails />
    </div>
  );
};

export default Dashboard;
