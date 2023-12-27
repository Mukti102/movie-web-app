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
          className="input input-bordered w-full border border-slate-700 focus:border-slate-200 bg-transparent max-w-xs dark:text-[#fff]"
        />
      </form>
    </div>
  );
}

export default Input;
