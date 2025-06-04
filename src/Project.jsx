import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '📚 BookStore Website',
    description: `The Bookstore Website is a user-friendly platform offering free books without login, 
making reading instantly accessible. After logging in, users can explore and access paid books across various genres. 
It features secure login data storage with MongoDB, a responsive contact page, dark mode for comfortable browsing, 
and full mobile screen compatibility for reading on the go.`,
  },
  {
    title: '📈 NHPC Share Price Watcher',
    description: `This stock market website was built using HTML, CSS, JavaScript, PHP, and MySQL to provide real-time 
insights into NSE and BSE stock data, specifically for NHPC. The platform features a clean UI, supports interactive 
charts, and ensures mobile responsiveness. Users can track stock trends and historical performance while data is 
securely stored and managed in a MySQL database.`,
  },
  {
    title: '🧠 Fake Message Detector using Machine Learning',
    description: `This project uses machine learning to detect fake or misleading messages in real time. It analyzes text 
patterns, keywords, and linguistic features to classify messages as either "real" or "fake." Trained on a labeled 
dataset, the model improves accuracy over time and can be integrated into messaging platforms or email systems to flag 
suspicious content.`,
  }
];

const radius = 300;
const rotationDuration = 20;

const Project = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.technocrazed.com/wp-content/uploads/2015/12/black-wallpaper-to-set-as-background-10.jpg')",
        perspective: '1000px',
      }}
    >
      {/* Title with more distance from the rod */}
      <h2 className="absolute top-8 text-white text-4xl font-bold z-20">💡 My Creations</h2>

      {/* Central Rod with top margin */}
      <div className="absolute w-1 h-[400px] bg-blue-500 z-20 mt-15" />

      {/* Rotating Orbit */}
      <motion.div
        className="relative w-screen h-screen z-10"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: rotationDuration,
        }}
      >
        {projects.map((project, index) => {
          const angle = (index / projects.length) * 2 * Math.PI;
          const angleDeg = (index / projects.length) * 360;
          const x = radius * Math.cos(angle);
          const z = radius * Math.sin(angle);

          // Flip inner content when angle is between 90° and 270°
          const shouldFlip = angleDeg > 90 && angleDeg < 270;

          return (
            <motion.div
              key={index}
              className="absolute w-80"
              style={{
                top: '50%',
                left: '50%',
                transformStyle: 'preserve-3d',
                transform: `
                  translate(-50%, -50%)
                  translateX(${x}px)
                  translateZ(${z}px)
                  rotateY(${-angleDeg}deg)
                `,
              }}
            >
              <div
                className="w-80 border-2 border-blue-400 bg-white p-4 rounded-2xl shadow-2xl"
                style={{
                  transform: shouldFlip ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  backfaceVisibility: 'visible',
                }}
              >
                <h3 className="font-bold text-lg mb-2 text-black">{project.title}</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line">{project.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Project; 