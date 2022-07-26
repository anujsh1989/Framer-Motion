import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Box1.css";

export default function Box1() {
  const [isAnimating, setISAnimating] = useState(false);
  const [imgAnimating, setImgAnimating] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? 500 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => {
          setISAnimating(!isAnimating);
        }}
      ></motion.div>
      <motion.img
        src="/logo192.png"
        animate={{
          x: imgAnimating ? 500 : -500,
          rotate: imgAnimating ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 10,
        }}
        onClick={() => {
          setImgAnimating(!imgAnimating);
        }}
      ></motion.img>
    </div>
  );
}
