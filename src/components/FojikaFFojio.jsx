import React from "react";
import FojikaFFojioPic from "../assets/Fujiko_Fujio.jpg";
import { motion } from "framer-motion";

export default function FojikaFFojio() {
  return (
    <motion.div
      className="md:h-96 bg-[#04A6D8] dark:bg-black my-8 grid md:grid-cols-[1fr_2fr] text-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="p-4 md:relative">
        <motion.img
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5 }}
          src={FojikaFFojioPic}
          alt="Fujiko Fujio"
          className="border-8 border-white rotate-12 md:absolute md:-top-2 md:left-32 md:w-72 w-60 mx-auto" // Adjust size and position as needed
        />
      </div>
      <div className="p-4 border-dashed m-3 border-white border-2">
        <h3 className="font-semibold text-4xl font-doraemon">
          The Magical Minds Behind Doraemon
        </h3>
        <motion.p className="text-xl m-2"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.5}}
        viewport={{once:true}}
        >
          The Birth of Doraemon: Doraemon, the iconic robotic cat, was created
          by Fujiko F. Fujio, a famous Japanese manga artist duo. The character
          first appeared in December 1969, in a manga published in the magazine
          Shonen Sunday. Created by Fujiko F. Fujio, Doraemon became an
          immediate hit, capturing the hearts of children and adults alike
          across Japan and beyond. The Inspiration Behind Doraemon: Fujiko F.
          Fujio drew inspiration from his desire to create a story that was not
          only entertaining but also meaningful. He envisioned a future where
          technology and robots could play a central role in human life, and
          Doraemon was born as a robotic cat sent from the future to help a
          young boy, Nobita. The combination of science fiction and comedy made
          the series appealing to a wide range of audiences
        </motion.p>
      </div>
    </motion.div>
  );
}
