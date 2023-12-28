import React from "react";
import Caraosel from "../../molecules/Caraosel";
import MovieLists from "../../molecules/MovieLists";
function MainHome() {
  return (
    <>
      <Caraosel />
      <MovieLists
        listName={"Trending"}
        url={"https://api.themoviedb.org/3/trending/movie/day?language=en-US"}
      />
      <MovieLists
        listName={"Most Popular?"}
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
    </>
  );
}

export default MainHome;
