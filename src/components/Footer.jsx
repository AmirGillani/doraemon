import React from "react";
import { CiStar } from "react-icons/ci";
import FooterImg from "../assets/footer-white.gif";
import FooterImg2 from "../assets/clouds-dark.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div className="bg-[#04A6D8] w-full text-white mx-auto p-8 text-center text-2xl dark:bg-black flex flex-col justify-center items-center"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1,ease:"easeInOut", delay:0.3}}
    >
      <div className="flex ">
        <CiStar />
        <p> &copy; 2025 All rights reserved</p>
        <CiStar />
      </div>
      <img src={FooterImg} alt="" className="dark:hidden" />
      <img src={FooterImg2} alt="" className="hidden w-full dark:block" />
    </motion.div>
  );
}
