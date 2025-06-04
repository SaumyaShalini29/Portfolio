import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Java', 'React',
  'MongoDB', 'Express', 'Node.js', 'PHP', 'MySQL',
  'Machine Learning', 'Python', 'Problem Solving',
  'Analytics', 'Excel', 'Power BI'
];

// Floating animation (looping)
const floatVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Skills = () => {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}
      className="text-white flex flex-col items-center py-10 overflow-hidden"
    >
      <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, ease: 'easeOut' }}
>

      {/* Title */}
      <h1 className="text-4xl font-extrabold italic bg-gradient-to-r from-white via-blue-900 to-gray-300 bg-clip-text text-transparent drop-shadow-md mb-12 tracking-wider">
        What I Bring
      </h1>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-8 px-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-white text-sm font-semibold flex items-center justify-center"
            variants={floatVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [30, 15, 0, -15, 0] }} // combined fade + float entrance
            transition={{
              delay: index * 0.2,
              duration: 1.2,
              ease: 'easeOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 2,
            }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 5, -5, 0],
              boxShadow: '0px 0px 25px 5px rgba(59, 130, 246, 0.7)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
              },
            }}
            style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #60a5fa, #1e3a8a)', // fixed here
                padding: '20px',
                textAlign: 'center',
                filter: 'drop-shadow(0 0 10px #3b82f6)',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
              }}
              
          >
            {skill}
          </motion.div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default Skills;
