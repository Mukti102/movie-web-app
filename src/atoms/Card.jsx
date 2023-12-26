import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Card({ img, title, date, id }) {
  const handleLongTitle = (title) => {
    if (title.length > 15) {
      return `${title.slice(0, 15)}...`;
    } else {
      return title;
    }
  };
  return (
    <Link
      to={`watch/${id}/movie/${title}`}
      className="w-40 rounded-md h-72 cursor-pointer overflow-hidden group"
    >
      <div className="w-full h-[85%] overflow-hidden rounded-md shadow-md group-hover:dark:shadow-pink-500 transition-all delay-100">
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all delay-100"
        />
      </div>
      <div className="w-full h-[15%] py-[2px]">
        <h1 className=" font-semibold text-[14px] dark:text-white group-hover:text-pink-500 transition-all delay-100 ">
          {handleLongTitle(title)}
        </h1>
        <p className="text-[11px] dark:text-[#bbb] text-slate-500 font-normal">
          {date}
        </p>
      </div>
    </Link>
  );
}

export default Card;
