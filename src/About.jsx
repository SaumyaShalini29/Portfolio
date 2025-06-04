import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
//import backImage from "./assets/back.jpeg";

// Animation variants for individual letters
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="flex items-center justify-center h-screen w-screen bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-white text-4xl font-bold tracking-wide"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Coming...
          </motion.h1>
        </motion.div>
      ) : (
          <motion.div
          key="content"
          className="w-full h-screen"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
           >

          <div
            style={{
              backgroundImage: "url('https://tse3.mm.bing.net/th?id=OIP.QMy04RDSGi402w8-vEpvVgHaE8&pid=Api&P=0&h=180')",
            }}
            className="relative w-full h-screen bg-cover bg-no-repeat bg-center overflow-hidden"
          >
            {/* ✨ Animated Text */}
            <motion.div
              className="text-center mt-20 z-10"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h3 className="text-2xl text-white flex justify-center gap-2">
                Meet,&nbsp;
                <span className="text-4xl text-blue-800 font-serif flex">
                  {"Saumya Shalini".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block cursor-pointer"
                      custom={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{
                        scale: 1.3,
                        color: "#60a5fa",
                        textShadow: "0px 0px 8px #60a5fa",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </h3>

              <motion.p
                className="text-2xl text-white ml-80 mt-3"
                style={{ fontFamily: "Georgia, serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.4 }}
              >
                A mind fueled by code & creativity
              </motion.p>
            </motion.div>

            {/* 💻 Enhanced 3D Model Section */}
            <motion.div
              className="mt-20 z-10 flex justify-center items-center relative"
              initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
              animate={{ opacity: 1, scale: 1.05, rotate: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.6,
                type: "spring",
                stiffness: 80,
              }}
            >
              <div className="relative w-[600px] h-[400px] sm:w-[700px] sm:h-[500px] max-w-[105vw] max-h-[90vh]">
                {/* Glowing background ring */}
                <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-[120px] animate-pulse -z-10" />

                {/* Reflection / bottom glow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-blue-400/20 blur-xl rounded-full -z-10" />

                {/* 3D Model Viewer */}
                <model-viewer
                  src="/models/comp.glb"
                  auto-rotate
                  camera-controls
                  alt="3D Model"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  exposure="1"
                  shadow-intensity="1"
                  camera-orbit="0deg 75deg 2.5m"
                  environment-image="neutral"
                  ar
                ></model-viewer>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default About;
