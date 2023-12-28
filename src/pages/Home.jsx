import React from "react";
import Sidebar from "../organisms/Sidebar";
import { Outlet } from "react-router";
import Main from "../organisms/Main";
import Footer from "../organisms/Footer";
function Home() {
  return (
    <div className="sm:flex sm:w-full block w-screen h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Home;
