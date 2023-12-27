import axios from "axios";
import React, { useEffect, useState } from "react";
import AppStore from "../zustand/AppStore";
import Card from "../atoms/Card";
function MovieLists({ url, listName }) {
  const getTrending = AppStore((state) => state.getRequest);
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        const res = await getTrending(url);
        setTrendings(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendings();
  }, [url]);
  return (
    <div className="w-full mt-6">
      <h1 className="text-whhite text-3xl font-bold dark:text-white">
        {listName}
      </h1>
      <div className="flex min-w-full flex-wrap gap-5 mt-5">
        {trendings?.map((item, index) => {
          return (
            <Card
              img={item.poster_path}
              key={index}
              id={item.id}
              title={item.original_title}
              date={item.release_date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieLists;
