import React from "react";
import Sidebar from "../organisms/Sidebar";
import Main from "../organisms/Main";
function Home() {
  return (
    <div className="w-full flex h-screen bg-slate-900">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
