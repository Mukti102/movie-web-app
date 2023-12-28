import axios from "axios";
import React, { useEffect, useState } from "react";
import AppStore from "../zustand/AppStore";
import "../index.css";
import { IoClose } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import "../index.css";
function Sidebar() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const genres = AppStore((state) => state.genres);
  const getGenres = AppStore((state) => state.getGenres);
  const close = AppStore((state) => state.setSidebar);
  const sidebar = AppStore((state) => state.sidebar);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getGenres(url);
  }, []);
  useEffect(() => {
    if (params.genre) {
      close(false);
    } else {
      return;
    }
  }, [params.genre]);
  return (
    <div
      className={`dark:bg-slate-900 bg-white sm:flex-col sm:flex sm:static  sm:mt-0 mt-0 flex-auto py-3 px-4 sm:h-screen sm:w-[20%] w-full overflow-y-auto scroll-barr-dark absolute  z-40 h-[90%] bottom-0 ${
        sidebar ? "-left-[1000px]" : "left-0"
      }`}
    >
      <span
        onClick={() => close(false)}
        className="absolute sm:hidden right-4 top-4 text-xl hover:text-red-500"
      >
        <IoClose />
      </span>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-slate-800 dark:text-slate-300 text-lg">
          Discover
        </h1>
        <div className="flex flex-col font-normal  gap-1 text-[15px]">
          <Link
            to={"/"}
            className="text-black hover:bg-slate-200 hover:dark:bg-slate-700  cursor-pointer px-1 py-1 rounded-sm dark:text-slate-400 hover:dark:text-slate-100"
          >
            Home
          </Link>
          <span className="text-black   px-1 py-1 rounded-sm dark:text-slate-400 hover:dark:text-slate-400 cursor-not-allowed">
            Room
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-7 gap-2">
        <h1 className="font-semibold text-slate-800 dark:text-slate-300 text-lg">
          Genres
        </h1>
        <div className="flex flex-col font-normal gap-1 text-[15px]">
          {genres?.genres.map((item) => {
            return (
              <Link
                to={`/genres/${item.id}`}
                key={item.id}
                className=" hover:bg-slate-200 hover:dark:bg-slate-700 cursor-pointer px-1 py-2 rounded-sm my-[1px] text-black dark:text-700 dark:text-slate-400 hover:dark:text-slate-100"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
