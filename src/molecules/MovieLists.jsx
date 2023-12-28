import axios from "axios";
import React, { useEffect, useState } from "react";
import AppStore from "../zustand/AppStore";
import Card from "../atoms/Card";
import CardLoad from "../Skeleton/CardLoad";
function MovieLists({ url, listName }) {
  const getLists = AppStore((state) => state.getRequest);
  const [movieLists, setMovieLists] = useState([]);
  const setSidebar = AppStore((state) => state.setSidebar);
  const sidebar = AppStore((state) => state.sidebar);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        setLoading(true);
        const res = await getLists(url);
        setMovieLists(res);
      } catch (err) {
        console.log(err.message);
        setLoading(true);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    };
    fetchTrendings();
  }, [url]);
  return (
    <div className="w-full sm:mt-6 mt-2 sm:px-0 px-3">
      <h1 className="text-whhite sm:text-3xl text-2xl font-bold dark:text-white sm:mb-3 mb-2">
        {listName}
      </h1>
      <hr className="dark:border-slate-700" />
      <div className="flex min-w-full flex-wrap sm:gap-5 gap-3 justify-start sm:mt-5 mt-3">
        {Loading ? (
          <CardLoad />
        ) : (
          movieLists?.map((item, index) => {
            return (
              <Card
                img={item.poster_path}
                key={index}
                id={item.id}
                title={item.original_title}
                date={item.release_date}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default MovieLists;
