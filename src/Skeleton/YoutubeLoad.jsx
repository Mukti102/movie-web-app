import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function YoutubeLoad() {
  return (
    <SkeletonTheme>
      <div className="sm:w-[800px] w-full h-[200px] sm:h-[450px]">
        <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
        <div className="mt-3 flex flex-col gap-1">
          <div className="w-28 h-7">
            <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
          </div>
          <span className="w-6 h-4">
            <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
          </span>
          <div className="w-[790px] h-4 rounded-sm overflow-hidden">
            <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
          </div>
          <div className="w-[790px] h-4 rounded-sm overflow-hidden">
            <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
          </div>
          <div className="w-[690px] h-4 rounded-sm overflow-hidden">
            <div className="w-full h-full bg-[#ddd] dark:bg-[#222]"></div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default YoutubeLoad;
