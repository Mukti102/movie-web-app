import React from "react";
import Sidebar from "../organisms/Sidebar";
import Main from "../organisms/Main";
function Home() {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
