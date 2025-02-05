import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";

export default function DarkMode() {

    const [clicked, setClicked] = useState(false);

  const toggleDarkMode = () => {
    setClicked(!clicked)
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
  };
  return (
    <div
      className=" bg-black text-white rounded-full fixed z-50 p-2 bottom-5 right-5 cursor-pointer"
      onClick={toggleDarkMode}
    >
     {!clicked ? <FaMoon size={30} />: <RiSunFill size={30} />} 
    </div>
  );
}
