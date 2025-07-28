import React from "react";
import Navbar from "./components/Subscription/Navbar";
import { Route, Routes } from "react-router-dom";
import Packages from "./components/Subscription/Packages";

const Subscription = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingInline: "12vw", paddingTop: "2rem" }}>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </div>
    </div>
  );
};

export default Subscription;
