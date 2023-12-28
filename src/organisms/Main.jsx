import React from "react";
import Header from "../molecules/Header";
import { Outlet } from "react-router";
import "../index.css";
function Main() {
  return (
    <div className=" flex-auto flex flex-col gap-7 sm:w-[77%] w-full h-full overflow-y-auto sm:py-3 sm:px-5 dark:bg-slate-900 bg-white py-4 px-0">
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
