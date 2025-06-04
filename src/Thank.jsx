import React from 'react';
import { motion } from 'framer-motion';

const Thank = () => {
  return (
    <motion.div
    key="content"
    className="w-full h-screen"
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 200, opacity: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <div
      style={{
        backgroundImage: "url('https://www.technocrazed.com/wp-content/uploads/2015/12/black-wallpaper-to-set-as-background-10.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}
      className="text-white flex flex-col"
    >
      {/* Centered Quote at the top */}
      <div className="text-center mt-20">
        <p className="text-3xl font-serif italic">
          "Gratitude is the flower that blooms from the soul.”
        </p>
        <p className="text-lg mt-2 font-light">
          Thank you for taking the time to explore my work
        </p>
      </div>

      {/* Thank You + Plant Model side by side */}
      <div className="flex justify-between items-center flex-1">
        {/* Thank You Text on Left */}
        <div className="max-w-md ml-[10%] mb-[15%]">
          <h1 className="text-8xl font-extrabold italic bg-gradient-to-r from-blue-900 to-white bg-clip-text text-transparent drop-shadow-md">
            Thank You!
          </h1>
          <p className="text-lg mt-4 font-serif">
            I truly appreciate your visit.
          </p>
        </div>

        {/* Plant Model on Right */}
        <div className='ml-[20%] '>
          <model-viewer
            src="/models/plant.glb"
            auto-rotate
            camera-controls
            alt="Plant 3D Model"
            background-color="#FFFFFF"
            style={{
              width: '600px',
              height: '450px',
              objectFit: 'contain',
            }}
          ></model-viewer>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Thank;
