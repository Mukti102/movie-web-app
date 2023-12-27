import React from "react";
import Header from "../molecules/Header";
import { Outlet } from "react-router";
function Main() {
  return (
    <div className="flex-auto flex flex-col gap-7 w-[74%] h-full overflow-y-auto py-3 px-5 dark:bg-slate-900 bg-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
