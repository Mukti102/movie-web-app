import axios from "axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
function YotubePlay({ id, movieId }) {
  const [movieDetail, setMovieDetail] = useState("");
  const YoutubeStyle = {
    height: "440",
    width: "810",
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
  }, []);
  console.log(movieDetail);
  return (
    <div className="flex-1">
      <YouTube videoId={movieId} opts={YoutubeStyle} />
      <div className="mt-3">
        <h1 className="text-3xl my-1 font-bold text-black">
          {movieDetail.title}
        </h1>
        <span className="text-sm">{movieDetail.date}</span>
        <p className="mt-3 text-[16px]">{movieDetail.content}</p>
      </div>
    </div>
  );
}

export default YotubePlay;
