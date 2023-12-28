import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import YoutubeLoad from "../Skeleton/YoutubeLoad";
import { Link } from "react-router-dom";
import "../index.css";

function YotubePlay({ id, movieId, Loading }) {
  const [movieDetail, setMovieDetail] = useState("");
  const youtubeRef = useRef();
  const youtubeId = youtubeRef.current?.props.videoId;
  const YoutubeStyle = {
    height: "450",
    width: "100%",
  };
  const YoutubeStyleMobile = {
    height: "200",
    width: "100%",
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
          console.log(data);
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
    <div className="flex-auto sm:w-[80%] w-[100%]  sm:pr-5 px-0 dark:border-slate-600">
      {Loading ? (
        <YoutubeLoad />
      ) : (
        <>
          <div className="sm:w-[800px] w-full sm:h-[450px]">
            <div className="dekstop-youtube">
              {/* dekstop */}
              <YouTube videoId={movieId} opts={YoutubeStyle} ref={youtubeRef} />
            </div>
            <div className="mobile-youtube">
              {/* Mobile */}
              <YouTube
                videoId={movieId}
                opts={YoutubeStyleMobile}
                ref={youtubeRef}
              />
            </div>
          </div>
          <div className="mt-3">
            <h1 className="sm:text-3xl text-2xl my-1 font-bold text-black dark:text-white">
              {movieDetail.title}
            </h1>
            <div className="w-full block">
              <div className="text-sm font-light dark:text-slate-400">
                {movieDetail.date}
              </div>
              <div className="mx-0 my-1 text-[14px] font-light dark:text-slate-400">
                {movieDetail?.genres?.map((item) => {
                  return (
                    <Link
                      to={`/genres/${item.id}`}
                      className="sm:mx-1 cursor-pointer hover:text-pink-500 font-normal"
                    >
                      {item.name},
                    </Link>
                  );
                })}
              </div>
            </div>
            <p className="mt-3 sm:text-[16px] text-sm mb-3 font-light text-[#111] dark:text-slate-400">
              {movieDetail.content}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default YotubePlay;
