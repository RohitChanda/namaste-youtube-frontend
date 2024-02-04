import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

const Body = () => {
 
  return (
    <>
      <Header />
       <ProgressBar />
      
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
