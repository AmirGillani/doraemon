import React from "react";
import img from "../assets/logo.png";
import img2 from "../assets/cloud.png";
import { motion } from "framer-motion";
import Nav from "./Nav";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-[#0D4397] to-[#feffff] dark:bg-gradient-to-b dark:from-[#1F2A44] dark:to-[#121826] ">
      <Nav />

      {/* Animated Images */}
      <motion.img
        src={img2}
        alt=""
        className="w-[20rem] absolute left-0"
        initial={{ x: "100vw" }} // start from right outside of the screen
        animate={{ x: "-100vw" }} // move to left outside of the screen
        transition={{
          x: {
            repeat: Infinity, // repeat animation infinitely
            repeatType: "loop", // loop the animation
            duration: 10, // set the duration to control speed
            ease: "linear", // make it a smooth, constant speed
          },
        }}
      />

      <motion.img
        src={img}
        alt=""
        className="w-[20rem] absolute"
        initial={{ y: 100, x: 100 }}
        animate={{
          y: [20, -20, 20], // This will create the zigzag vertical movement
          x: [20, -20, 20], // This will create the zigzag horizontal movement
        }}
        transition={{
          duration: 3, // You can adjust the duration of each cycle of the "zing-zang"
          repeat: Infinity, // Makes the animation loop infinitely
          repeatType: "loop", // Ensures it repeats in a smooth loop
          ease: "easeInOut", // Smooth easing for a floating effect
        }}
      />

      <motion.img
        src={img2}
        alt=""
        className="w-[20rem] absolute right-0 bottom-1"
        initial={{ x: "100vw" }} // start from right outside of the screen
        animate={{ x: "-100vw" }} // move to left outside of the screen
        transition={{
          x: {
            repeat: Infinity, // repeat animation infinitely
            repeatType: "loop", // loop the animation
            duration: 10, // set the duration to control speed
            ease: "linear", // make it a smooth, constant speed
          },
        }}
      />
    </div>
  );
}
