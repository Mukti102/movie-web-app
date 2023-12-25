import React from "react";
import Header from "../molecules/Header";
import Caraosel from "../molecules/Caraosel";
function Main() {
  return (
    <div className="flex-auto w-[74%] h-full py-3 px-5 dark:bg-slate-900 bg-white">
      <Header />
      <Caraosel />
    </div>
  );
}

export default Main;
