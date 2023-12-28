import React, { useState } from "react";
import { PiFilmSlateLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import AppStore from "../zustand/AppStore";
function Logo() {
  const open = AppStore((state) => state.setSidebar);
  const sidebard = AppStore((state) => state.sidebar);
  return (
    <div className="flex gap-1 items-center dark:text-slate-100">
      <PiFilmSlateLight className="sm:text-3xl sm:flex hidden text-2xl" />
      <button className="text-black dark:text-white" onClick={() => open(true)}>
        {sidebard ? (
          <GoSidebarCollapse className="sm:hidden text-xl" />
        ) : (
          <GoSidebarExpand className="sm:hidden text-xl" />
        )}
      </button>
      <Link to={"/"} className="sm:text-xl text-lg font-semibold">
        VieFlix
      </Link>
    </div>
  );
}

export default Logo;
