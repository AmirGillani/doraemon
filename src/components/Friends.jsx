import React, { useState } from "react";
import { FRIENDS } from "../assets/constant/contant";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion/dom";

export default function Friends() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      
      transition: {
        duration: 0.5,
        staggerChildren: 1,
        ease:"easeOut"
      },
    },
  };

  const itemVarient = {
    hidden: { opacity: 0,  },
    visible: {
      opacity: 1,
      
      transition: {
        duration: 1.5,
        ease:"easeOut"
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-[#04A6D8] font-doraemon text-4xl my-16 text-center dark:text-white">
        Meet my friends and family
      </h1>
      <motion.div
        className=" flex md:flex-row flex-col gap-2"
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: true }}
      >
        {FRIENDS.map((friend, index) => {
          return (
            <motion.div
              className={`flex md:flex-row flex-col  gap-1 p-2 cursor-pointer`}
              style={{
                background: `linear-gradient(to bottom, white, ${friend.color})`,
              }}
              key={index}
              onClick={() => setIsOpen(index === isOpen ? null : index)}

              initial="hidden"
                whileInView="visible"
                variants={itemVarient}
                viewport={{ once: true }}
                whileHover={{scale:0.9}}
                transition={{duration:0.2, ease:"easeOut"}}
            >
              <img src={friend.img} alt="" className="w-[150px] h-[250px]" />
              {isOpen === index && (
                <div className="max-w-[30vw] flex flex-col justify-center items-center">
                  <h2 className="font-doraemon font-semibold text-3xl text-pink-500 ">
                    Hi I am {friend.name}
                  </h2>
                  <p className="font-doraemon font-extralight  text-xl">
                    {friend.description}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
