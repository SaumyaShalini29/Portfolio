import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (formData.message.trim() === "") return;
    localStorage.setItem('contactMessage', JSON.stringify(formData));
    console.log("Message saved:", formData);
    alert("Message saved to localStorage!");
  };

  return (
    <motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
    <div
      className="flex w-full h-screen px-10 bg-cover bg-center items-center justify-between"
      style={{
        backgroundImage: "url('https://www.technocrazed.com/wp-content/uploads/2015/12/black-wallpaper-to-set-as-background-10.jpg')",
      }}
    >
      {/* Left Side - Contact Form */}
      <div className="w-1/2 flex flex-col justify-center text-white space-y-5 ml-[10%]">
        <h1 className='text-white text-4xl mb-6'>Let's Connect</h1>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your name?</legend>
          <input
            type="text"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type here"
          />
        </fieldset>

        <fieldset className='fieldset'>
          <legend className="fieldset-legend text-xs">Enter valid Email Address</legend>
          <input
            className="input validator"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="mail@site.com"
          />
        </fieldset>

        <fieldset className='fieldset'>
          <legend className="fieldset-legend text-xs">Enter Your Message</legend>
          <input
            type="text"
            className="input"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here"
          />
        </fieldset>

        <div className='flex gap-5 h-7'>
          <button
            onClick={handleSubmit}
            className=' rounded-xl w-1/6 flex flex-col justify-center bg-blue-600 hover:bg-white hover:text-black'
          >
            Connect
          </button>

          <div className="flex gap-3">
            {/* View Resume Button */}
            <a
              href="/My_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-center rounded-xl w-28 flex justify-center bg-blue-600 hover:bg-white hover:text-black"
            >
              View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href="/My_Resume.pdf"
              download
              className=" text-center rounded-xl w-28 flex justify-center bg-blue-600 hover:bg-white hover:text-black"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - 3D Model */}
      <div className="w-1/2 flex justify-center md:justify-end">
        <model-viewer
          src="/models/globe.glb"
          auto-rotate
          camera-controls
          alt="3D Model"
          style={{ width: "500px", height: "500px", maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain" }}
          min-camera-orbit="auto 40deg auto"
          max-camera-orbit="auto 80deg auto"
        ></model-viewer>
      </div>

      {/* Bottom Fixed Contact Info */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <div className='flex gap-2 items-end bg-transparent'>

          {/* Phone */}
          <div className="group flex flex-col items-center">
            <span className="text-white mb-0.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
              +91 6207647254
            </span>
            <PhoneIcon className="h-7 w-7 text-white transition duration-300" />
          </div>

          {/* Email */}
          <div className="group flex flex-col items-center">
            <span className="text-white mb-0.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-xs text-center">
              saumyashalini29@gmail.com
            </span>
            <EnvelopeIcon className="h-7 w-7 text-white transition duration-300" />
          </div>

          {/* GitHub */}
          <div className="group flex flex-col items-center">
            <span className="text-white mb-0.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-xs text-center">
              github.com/SaumyaShalini29
            </span>
            <FaGithub className="h-7 w-7 text-white transition duration-300" />
          </div>

          {/* LinkedIn */}
          <div className="group flex flex-col items-center">
            <span className="text-white mb-0.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-xs text-center">
              LinkedIn
            </span>
            <a href="https://www.linkedin.com/in/saumya-shalini-a64140261/" target="_blank" rel="noopener noreferrer">
              <span className="[&>svg]:h-7 [&>svg]:w-7 text-white hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
          </div>

        </div>
        </div>
        </div>
      </motion.div>
  );
};

export default Contact;
