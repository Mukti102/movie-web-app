import React from "react";
function CardRelated() {
  const skeletons = [];
  for (let i = 0; i < 10; i++) {
    skeletons.push(
      <div className="flex-auto w-full flex gap-2 h-28 overflow-hidden">
        <div className="w-1/2 h-28 bg-[#ddd] dark:bg-[#333] overflow-hidden rounded-sm"></div>
        <div className="w-1/2 text-[#eee]">
          <div className="w-36 rounded-sm h-5 bg-[#ddd] dark:bg-[#333] mb-3"></div>
          <div className="w-40 h-3 bg-[#ddd] dark:bg-[#333] my-2 rounded-sm"></div>
          <div className="w-40 h-3 bg-[#ddd] dark:bg-[#333] my-2 rounded-sm"></div>
          <div className="w-40 h-3 bg-[#ddd] dark:bg-[#333] my-2 rounded-sm"></div>
        </div>
      </div>
    );
  }
  return <>{skeletons}</>;
}

export default CardRelated;
