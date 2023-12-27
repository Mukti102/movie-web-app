import React from "react";
import Sidebar from "../organisms/Sidebar";
import { Outlet } from "react-router";
import Main from "../organisms/Main";
function Home() {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      {/* <Main /> */}
      <Outlet />
    </div>
  );
}

export default Home;
