import React, { useState } from "react";
import AppStore from "../zustand/AppStore";
import { useNavigate } from "react-router";
function Input() {
  const get = AppStore((state) => state.getRequest);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const inputSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputValue}`);
    setInputValue("");
  };
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="w-1/2">
      {" "}
      <form onSubmit={inputSubmit}>
        <input
          value={inputValue}
          onChange={inputChange}
          type="text"
          placeholder="Search Movie..."
          className="input input-border w-full sm:h-12 h-9 border border-slate-700 sm:focus:border-slate-200 sm:placeholder:text-base placeholder:text-sm bg-transparent max-w-xs dark:text-[#fff] sm:text-base text-sm focus:input-border-none focus:h-9"
        />
      </form>
    </div>
  );
}

export default Input;
