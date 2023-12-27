import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

function YotubePlay({ id, movieId }) {
  const [movieDetail, setMovieDetail] = useState("");
  const youtubeRef = useRef();
  const youtubeId = youtubeRef.current?.props.videoId;
  const YoutubeStyle = {
    height: "430",
    width: "790",
  };

  useEffect(() => {
    const fetchDetail = async () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzdkYmVjOTdkMzJhOTdkNjFiZDFmOWExM2NmODNmNCIsInN1YiI6IjY1Nzg2ZGFlNGJmYTU0NWNmZjkxMzk1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d7ltvqKEExuzXSCbVaPHHS5AkemmWD_qvLaXSnRxrWM",
          },
        })
        .then((result) => {
          const data = result.data;
          const selectedDetail = {
            genres: data.genres,
            title: data.original_title,
            content: data.overview,
            popularity: data.popularity,
            date: data.release_date,
          };
          setMovieDetail(selectedDetail);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchDetail();
  }, [id, movieId, youtubeId]); // Include youtubeKey in the dependency array

  return (
    <div className="flex-1 pr-6 border-r-[1.4px] dark:border-slate-600">
      <YouTube videoId={movieId} opts={YoutubeStyle} ref={youtubeRef} />
      <div className="mt-3">
        <h1 className="text-3xl my-1 font-bold text-black dark:text-white">
          {movieDetail.title}
        </h1>
        <span className="text-sm font-light dark:text-slate-400">
          {movieDetail.date}
        </span>
        <p className="mt-3 text-[16px] font-light text-[#111] dark:text-slate-400">
          {movieDetail.content}
        </p>
      </div>
    </div>
  );
}

export default YotubePlay;
