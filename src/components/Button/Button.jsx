import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Button.css";

export const Menu = ({ ...props }) => (
  <svg {...props} width="17" height="15" viewBox="0 0 17 15" fill="none">
    <path
      d="M17 0H0v1.4h17V0zm0 6.8H0v1.4h17V6.8zm0 6.8H0V15h17v-1.4z"
      fill="currentColor"
    />
  </svg>
);

export const Close = ({ ...props }) => (
  <svg {...props} width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      d="M17 1l-1-1-7.5 7.5L1 0 0 1l7.5 7.5L0 16l1 1 7.5-7.5L16 17l1-1-7.5-7.5L17 1z"
      fill="currentColor"
    />
  </svg>
);

export default function Button() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button
        aria-label="Close menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ type: "tween", duration: 0.15 }}
          >
            <Close className="w-10 h-10" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ type: "tween", duration: 0.15 }}
          >
            <Menu className="w-10 h-10" />
          </motion.div>
        )}
      </button>
    </div>
  );
}
