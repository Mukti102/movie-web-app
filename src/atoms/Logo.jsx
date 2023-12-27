import React from "react";
import { PiFilmSlateLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="flex gap-1 items-center dark:text-slate-100">
      <PiFilmSlateLight className="text-3xl" />
      <h1 className="text-xl font-semibold">VieFlix</h1>
    </Link>
  );
}

export default Logo;
