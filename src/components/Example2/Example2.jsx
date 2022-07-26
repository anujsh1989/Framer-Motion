import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import "./Example2.css";

export default function Example2() {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };
  const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1000);
  }, [colors]);

  return (
    <ul>
      {colors.map((background) => (
        <motion.li
          key={background}
          layout
          transition={spring}
          style={{ background }}
        />
      ))}
    </ul>
  );
}
