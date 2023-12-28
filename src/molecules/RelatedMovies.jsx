import axios from "axios";
import React, { useEffect, useState } from "react";
import AppStore from "../zustand/AppStore";
import { handleLongContent } from "../functions/handleName";
import { Link } from "react-router-dom";
import CardRelated from "../Skeleton/CardRelated";
function RelatedMovies({ id }) {
  const getRelates = AppStore((state) => state.getRequest);
  const [isLoading, setIsLoading] = useState(false);
  const [relateMovies, setRelateMovies] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const res = await getRelates(
          `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
        );
        setRelateMovies(res);
      } catch {
        console.log(err);
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [id]);
  return (
    <div className="flex-auto sm:w-[50%] w-full sm:px-4 px-0 sm:border-l-[1px] dark:border-slate-700 h-screen sm:overflow-y-auto">
      <h1 className="dark:text-[#ddd] font-semibold mb-3 text-[#111] text-xl">
        Related Movies
      </h1>
      <div className="w-full flex flex-col gap-4">
        {isLoading ? (
          <CardRelated />
        ) : (
          relateMovies?.map((movie, index) => {
            return (
              <Link
                to={`/watch/${movie.id}/movie/${movie.title}`}
                key={index}
                className="flex-auto w-full  flex gap-2 h-28 overflow-hidden"
              >
                <div className="w-1/2 h-28 bg-black overflow-hidden rounded-sm">
                  {movie.backdrop_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full dark:bg-[#333] bg-[#ddd]"></div>
                  )}
                </div>
                <div className="w-1/2 text-[#eee]">
                  <h1 className="text-[#222] dark:text-[#fff] text-[15px] font-semibold">
                    {movie.original_title}
                  </h1>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {handleLongContent(movie.overview, 100)}
                  </p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default RelatedMovies;
