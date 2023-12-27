import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import Header from "../molecules/Header";
import AppStore from "../zustand/AppStore";
import YotubePlay from "../molecules/YotubePlay";
import RelatedMovies from "../molecules/RelatedMovies";
function Preview() {
  const api_key = AppStore((state) => state.apiKey);
  const params = useParams();
  const [movieId, setMovieId] = useState("");
  const id = params.id;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=videos`
      )
      .then((res) => {
        console.log(res);
        return res.data.videos.results;
      })
      .then((result) => {
        const filter = result.find((vid) => vid.name.includes(params.title));
        if (filter) {
          setMovieId(filter.key);
        } else {
          setMovieId(result[0].key);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);
  return (
    <div className="w-full px-5 py-3 bg-white dark:bg-slate-900">
      <Header />
      <div className="w-full flex mt-8">
        <YotubePlay movieId={movieId} id={id} />
        <RelatedMovies id={id} />
      </div>
    </div>
  );
}

export default Preview;
