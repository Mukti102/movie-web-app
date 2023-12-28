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
  const getYoutubeId = AppStore((state) => state.getYoutubeId);
  const [isLoading, setIsloading] = useState(false);
  const id = params.id;
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsloading(true);
        const res = await getYoutubeId(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=videos`,
          params
        );
        setMovieId(res);
      } catch (err) {
        console.log(err);
        setIsloading(true);
      } finally {
        setIsloading(false);
      }
    };
    fetch();
  }, [params]);
  return (
    <div className="w-full px-5 py-3 bg-white dark:bg-slate-900">
      <Header />
      <div className="w-full sm:flex block mt-8">
        <YotubePlay movieId={movieId} id={id} Loading={isLoading} />
        <RelatedMovies id={id} />
      </div>
    </div>
  );
}

export default Preview;
