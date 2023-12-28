import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { handleLongContent } from "../functions/handleName";
import { useParams } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
function Card({ img, title, date, id }) {
  const params = useParams();
  return (
    <Link
      to={`watch/${id}/movie/${title}`}
      className="sm:w-36 rounded-md sm:h-64 w-[102px] h-48 cursor-pointer overflow-hidden group"
    >
      <div className="w-full h-[85%] overflow-hidden rounded-md shadow-md group-hover:dark:shadow-pink-500 transition-all delay-100">
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all delay-100"
        />
      </div>
      <div className="w-full h-[15%] py-[2px]">
        <h1 className=" font-semibold sm:text-[14px] text-[10px] dark:text-white group-hover:text-pink-500 transition-all delay-100 ">
          {handleLongContent(title, 15)}
        </h1>
        <p className="sm:text-[11px] text-[8px] dark:text-[#bbb] text-slate-500 font-normal">
          {date}
        </p>
      </div>
    </Link>
  );
}

export default Card;
