import React from "react";
import { PiFilmSlateLight } from "react-icons/pi";

function Logo() {
  return (
    <div className="flex gap-1 items-center dark:text-slate-100">
      <PiFilmSlateLight className="text-3xl" />
      <h1 className="text-xl font-semibold">VieFlix</h1>
    </div>
  );
}

export default Logo;
