import React from "react";
import Header from "../components/aAllComponents/header";
import Footer from "../components/aAllComponents/footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
