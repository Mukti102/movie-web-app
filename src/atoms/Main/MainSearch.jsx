import React from "react";
import MovieLists from "../../molecules/MovieLists";
import { useParams } from "react-router";
function MainSearch() {
  const params = useParams();
  const movieTitle = params.movie;
  return (
    <div>
      <MovieLists
        listName={"Search"}
        url={`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`}
      />
    </div>
  );
}

export default MainSearch;
