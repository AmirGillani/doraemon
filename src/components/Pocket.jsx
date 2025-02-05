import React, { useState } from "react";
import { GADGETS } from "../assets/constant/contant";
import { motion } from "framer-motion";

export default function Pocket() {
  const [isOpen, setIsOpen] = useState(false);

  // Define the container variant with staggered animation for items
  const containerVariant = {
    hidden: { opacity: 0, y: -50 }, // Initially slightly above
    visible: {
      opacity: 1,
      y: 0, // Final position
      transition: {
        duration: 0.5,
        staggerChildren: 0.3, // Delay for staggered effect
      },
    },
  };

  // Define item variant with vertical movement from above
  const itemVariant = {
    hidden: { opacity: 0, y: -100 }, // Start above the screen
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        duration: 0.7, // Duration for each item to animate
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-[#04A6D8] font-doraemon text-4xl my-16 text-center dark:text-white">
        Discover My Amazing Gadgets
      </h1>

      <motion.div
        className="rounded-b-full h-36 w-80 shadow shadow-gray-500 flex justify-center items-center hover:cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:"easeInOut", delay:0.3}}
      >
        <h6 className="text-center">Click on Doraemon's Pocket</h6>
      </motion.div>

      {isOpen && (
        <motion.div
          className="m-8 grid md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          variants={containerVariant}
          viewport={{ once: true }}
        >
          {GADGETS.map((gadget, index) => {
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariant}
                viewport={{ once: true }}
              >
                <img src={gadget.img} alt="gadget" className="w-56" />
                <h5 className="text-xl text-center dark:text-white">
                  {gadget.name}
                </h5>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
