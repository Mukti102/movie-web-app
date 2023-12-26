import React from "react";
import Header from "../molecules/Header";
import Caraosel from "../molecules/Caraosel";
import MovieLists from "../molecules/MovieLists";
function Main() {
  return (
    <div className="flex-auto flex flex-col gap-7 w-[74%] h-full overflow-y-auto py-3 px-5 dark:bg-slate-900 bg-white">
      <Header />
      <Caraosel />
      <MovieLists
        listName={"Trending"}
        url={"https://api.themoviedb.org/3/trending/movie/day?language=en-US"}
      />
      <MovieLists
        listName={"Most Popular"}
        url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"}
      />
      <MovieLists
        listName={"Top Rated"}
        url={
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        }
      />
      <MovieLists
        listName={"Up Coming"}
        url={
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        }
      />
    </div>
  );
}

export default Main;
