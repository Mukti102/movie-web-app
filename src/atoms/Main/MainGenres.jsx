import React from "react";
import { useParams } from "react-router";
import MovieLists from "../../molecules/MovieLists";
import AppStore from "../../zustand/AppStore";
function MainGenres() {
  const params = useParams();
  const genres = AppStore((state) => state.genres);
  const genre = genres.genres.filter((genre) => genre.id == params.genre);
  return (
    <MovieLists
      listName={genre[0].name}
      url={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params.genre}`}
    />
  );
}

export default MainGenres;
