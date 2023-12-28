import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppStore from "../zustand/AppStore";
import movieDark from "../assets/darkLogo.svg";
import movieLight from "../assets/lightLogo.svg";
import sidebarDark from "../assets/sidebarIconDark.svg";
import sidebarLight from "../assets/sidebarIconLight.svg";
import sidebarActiveDark from "../assets/sidebarActiveDark.svg";
import sidebarActiveLight from "../assets/sidebarActiveLight.svg";
function Logo() {
  const open = AppStore((state) => state.setSidebar);
  const sidebard = AppStore((state) => state.sidebar);
  return (
    <div className="flex gap-1 pr-3 w-24  items-center justify-start dark:text-slate-100 ">
      <div className="w-7">
        <img
          src={movieDark}
          alt=""
          className="w-full text-white sm:flex hidden dark:hidden"
        />
        <img
          src={movieLight}
          alt=""
          className="w-full  sm:hidden  hidden sm:dark:flex"
        />
      </div>
      <button
        className="sm:text-black sm:hidden flex sm:dark:text-white text-black dark:text-white"
        onClick={() => open(true)}
      >
        {sidebard ? (
          <div className="w-6">
            <img
              src={sidebarDark}
              alt=""
              className=" w-full flex dark:hidden"
            />
            <img
              src={sidebarLight}
              alt=""
              className=" w-full  hidden dark:flex"
            />
          </div>
        ) : (
          <div className="w-6">
            <img
              src={sidebarActiveDark}
              alt=""
              className="w-full flex dark:hidden "
            />
            <img
              src={sidebarLight}
              alt=""
              className=" w-full  hidden dark:flex"
            />
          </div>
        )}
      </button>
      <Link to={"/"} className="outline-none sm:text-xl text-lg font-semibold">
        VieFlix
      </Link>
    </div>
  );
}

export default Logo;
