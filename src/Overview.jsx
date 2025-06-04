import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <motion.div
  key="content"
  className="w-full h-screen"
  initial={{ x: 200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 200, opacity: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>

    <div className="bg-transparent ">
      <div
        style={{
          backgroundImage:
            "url('https://www.technocrazed.com/wp-content/uploads/2015/12/black-wallpaper-to-set-as-background-10.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh'
        }}
      >
        <div className="text-md text-white ">INTRODUCTION</div>
        <div className="text-4xl text-white bg-transparent mt-5">Overview</div>
        <p className="text-sm text-white mt-3">
        As a skilled MERN stack developer, I craft comprehensive web solutions that seamlessly integrate MongoDB, Express.js, React, and Node.js. My focus is on creating applications that not only captivate users but also streamline operations, ensuring both engagement and efficiency. By staying abreast of the latest industry trends and best practices, I ensure that the applications I develop are both innovative and efficient. My commitment to continuous learning and adaptability allows me to tackle complex challenges and deliver high-quality, scalable solutions tailored to meet diverse client needs​
        </p>

        {/* Cards Container */}
        <div className="flex gap-5  mt-20 ">
          {/** MERN Stack Card */}
          <div className="opacity-0 animate-fade-in delay-[200ms] transition-all duration-700">
            <div className="card bg-transparent w-[350px] h-[450px] shadow-sm border-2 border-gray-700 hover:bg-gray-100 hover:scale-95 hover:text-black p-4">
              <div className="card-body bg-transparent">
                <h2 className="card-title bg-transparent">MERN Stack Developer</h2>
                <p>Building dynamic and scalable web applications...</p>
              </div>
              <figure>
                <img
                  src="https://wallpaperbat.com/img/1170957-what-is-mern-stack-and-how-does-it-work.png"
                  className="h-20px bg-transparent"
                  alt="MERN Stack"
                />
              </figure>
            </div>
          </div>

          {/** Machine Learning Card */}
          <div className="opacity-0 animate-fade-in delay-[2000ms] transition-all duration-700">
            <div className="card bg-transparent w-[350px] h-[450px] shadow-sm border-2 border-gray-700 hover:bg-white hover:scale-95 hover:text-black p-4">
              <div className="card-body bg-transparent">
                <h2 className="card-title">Machine Learning Enthusiast</h2>
                <p>Exploring AI-driven solutions by developing predictive models...</p>
              </div>
              <figure>
                <img
                  src="https://iaidl.org/wp-content/uploads/2020/11/artificial-intelligence-png-1-300x272.png"
                  className="h-20px bg-transparent"
                  alt="Machine Learning"
                />
              </figure>
            </div>
          </div>

          {/** DSA Card */}
          <div className="opacity-0 animate-fade-in delay-[4000ms] transition-all duration-700">
            <div className="card bg-transparent w-[350px] h-[450px] shadow-sm border-2 border-gray-700 hover:bg-white hover:scale-95 hover:text-black p-4">
              <div className="card-body bg-transparent">
                <h2 className="card-title">Problem-Solving Enthusiast</h2>
                <p>Passionate about solving complex problems using algorithms...</p>
              </div>
              <figure>
                <img
                  src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-word-cloud---data-structure-complexity-amounts-data-vector-picture-image_9847506.png"
                  className="h-20px bg-transparent"
                  alt="DSA"
                />
              </figure>
            </div>
          </div>

          {/** Data Analytics Card */}
          <div className="opacity-0 animate-fade-in delay-[6000ms] transition-all duration-700">
            <div className="card bg-transparent w-[350px] h-[450px] shadow-sm border-2 border-gray-700 hover:bg-white hover:scale-95 hover:text-black p-4">
              <div className="card-body bg-transparent">
                <h2 className="card-title">Data Analytics</h2>
                <p>Leveraging data to uncover insights, optimize decisions...</p>
              </div>
              <figure>
                <img
                  src="https://www.anantics.com/assets/images/Big-data-3.png"
                  className="h-20px bg-transparent"
                  alt="Data Analytics"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Overview; 