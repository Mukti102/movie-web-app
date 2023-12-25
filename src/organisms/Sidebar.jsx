import axios from "axios";
import React, { useEffect } from "react";
import AppStore from "../zustand/AppStore";
import "../index.css";
function Sidebar() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const genres = AppStore((state) => state.genres);
  const getGenres = AppStore((state) => state.getGenres);
  useEffect(() => {
    getGenres(url);
  }, []);
  return (
    <div className="dark:bg-slate-900 bg-white flex-auto py-3 px-4 h-full overflow-y-auto scroll-barr-dark">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-slate-800 dark:text-slate-300 text-lg">
          Discover
        </h1>
        <div className="flex flex-col font-normal  gap-1 text-[15px]">
          <span className="text-black hover:bg-slate-200 hover:dark:bg-slate-700  cursor-pointer px-1 py-1 rounded-sm dark:text-slate-400 hover:dark:text-slate-100">
            Home
          </span>
          <span className="text-black hover:bg-slate-200 hover:dark:bg-slate-700  cursor-pointer px-1 py-1 rounded-sm dark:text-slate-400 hover:dark:text-slate-100">
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
              <span
                key={item.id}
                className=" hover:bg-slate-200 hover:dark:bg-slate-700 cursor-pointer px-1 py-2 rounded-sm my-[1px] text-black dark:text-700 dark:text-slate-400 hover:dark:text-slate-100"
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
