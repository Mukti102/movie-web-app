import React from "react";
import Logo from "../atoms/Logo";
import Input from "../atoms/Input";
import Swap from "../atoms/Swap";
function Header() {
  return (
    <div className="sm:w-full sm:px-0 px-3 flex justify-between">
      <Logo />
      <Input />
      <Swap />
    </div>
  );
}

export default Header;
