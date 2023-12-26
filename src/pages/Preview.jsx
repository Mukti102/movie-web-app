import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import Header from "../molecules/Header";
import AppStore from "../zustand/AppStore";
import YotubePlay from "../molecules/YotubePlay";
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
      .then((res) => res.data.videos.results)
      .then((result) => result.find((vid) => vid.name === "Official Trailer"))
      .then((item) => setMovieId(item.key))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(id);
  return (
    <div className="w-full px-5 py-3 bg-white dark:bg-slate-900">
      <Header />
      <div className="w-full flex mt-8">
        <YotubePlay movieId={movieId} id={id} />
        <div className="flex-auto"></div>
      </div>
    </div>
  );
}

export default Preview;
