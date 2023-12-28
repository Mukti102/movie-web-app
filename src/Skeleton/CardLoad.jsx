import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
function CardLoad() {
  const skeletons = [];
  for (let i = 0; i < 10; i++) {
    skeletons.push(
      <div
        key={i}
        className="sm:w-36 rounded-md sm:h-64 w-[105px] h-52 cursor-pointer overflow-hidden"
      >
        <div className="w-full rounded-md h-[85%] cursor-pointer overflow-hidden group">
          <div className="bg-[#ddd] mb-4 w-full h-full dark:bg-[#222]"></div>
          <div className="w-full h-[15%] py-[2px]">
            <div className="w-20 h-10">
              <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
            </div>
            <div className="w-14 h-10">
              <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div className="flex gap-2 flex-wrap">{skeletons}</div>;
}

export default CardLoad;
