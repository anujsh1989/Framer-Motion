import React from "react";
import { motion } from "framer-motion"
import "./Box2.css"

export default function Box2() {
    return (
        <div className="box-container" >
            <motion.div
                className="box"
                drag
                whileHover={{
                    scale: 1.1,

                }}
                whileTap={{
                    scale: 0.9,

                }}


            >

            </motion.div>
        </div>
    );
}