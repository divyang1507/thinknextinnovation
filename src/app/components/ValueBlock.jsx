'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export const ValueBlock = ({heading, para}) => {

    const [isTouched, setIsTouched] = useState(false);

    const handleTouch = () => {
      setIsTouched((prevState) => !prevState);
    };
  


  return (
    <>
      <motion.div
        initial="initial"
        animate={isTouched ? "hover" : "initial"}
        onTouchStart={handleTouch}
        whileHover="hover"
        layout
        className="valueblock"
      >
        <div className="valueHeading">
          <h3>{heading}</h3>
          <motion.p
            variants={{
              initial: { opacity: 0, height: 0, y: 20 },
              hover: { opacity: 1, height: "auto", y: 0 },
            }}
            transition={{ duration: 0.5 }}
            layout
          >
           {para}
          </motion.p>
        </div>
        <motion.div
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: 45 },
          }}
          transition={{ duration: 0.5 }}
          className="icon"
        >
          <FaArrowRight />
        </motion.div>
      </motion.div>
    </>
  );
};
