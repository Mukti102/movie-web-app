import React from "react";

function Input() {
  return (
    <div className="w-1/2">
      {" "}
      <input
        type="text"
        placeholder="Search Movie..."
        className="input input-bordered w-full border border-slate-700 focus:border-slate-200 bg-transparent max-w-xs"
      />
    </div>
  );
}

export default Input;
