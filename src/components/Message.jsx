import React from "react";
import { motion } from "framer-motion";
export default function Message() {
  return (
    <div className="m-8">
      <motion.div className="m-auto p-8 w-[80%] bg-gray-200  grid md:grid-cols-[3fr_1fr] shadow-xl shadow-gray-400 "
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1,ease:"easeInOut"}}
      >
        <div 
         
        >
          <h2 className="font-doraemon text-4xl text-pink-500 font-bold text-center">
            Message From Doraemon
          </h2>
          <p className="font-doraemon text-xl text-gray-800 font-extralight text-left m-5">
            Hey Dosto,I hope you remember me now too,These busy days, balancing work and life can be tough, na?

            You might think everything wasbgood when you were a kid.Ever wondered why you feel this way? It's because, often, we don't listen to what our inner child is trying to tell us.

            We brush it off, thinking , "Who has time for this? I'm an adult now.Being an adult is great,but it's also important to reconnect with that plauful,imaginative part of our selves.So, take a moment,listen to your inner child,and if you ever need a hand,just give me a call.
          </p>
        </div>
        <div>
          <img src={"https://res.cloudinary.com/dj5ph1k2r/image/upload/v1738850118/doraemon/message_jotkgr.png"} alt="" className="w-fit" />
        </div>
      </motion.div>
    </div>
  );
}
