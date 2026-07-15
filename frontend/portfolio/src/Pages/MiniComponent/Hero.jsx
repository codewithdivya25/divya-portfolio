import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import axios from "axios";
import { motion } from "framer-motion";

const Hero = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-portfolio-1-3m3a.onrender.com/api/v1/user/me",
          { withCredentials: true }
        );

        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getMyProfile();
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-16"
    >

      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/70 dark:bg-white/10 backdrop-blur-xl shadow-md mb-6">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Available For Work
            </p>

          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Divya
            </span>

          </h1>

          {/* Typewriter */}
          <div className="mt-5 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">

            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Freelancer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </div>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-gray-600 dark:text-gray-300 text-lg leading-relaxed">

            {user.aboutMe ||
              "I build modern, scalable and visually stunning web applications using React, Node.js and MongoDB."}

          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-5">

            <a
              href={user.githubURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-2xl bg-black text-white font-semibold shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              <FaGithub />
              Github
            </a>

            <a
              href={user.resume?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-6 text-2xl text-gray-700 dark:text-gray-300">

            <a
              href={user.instagramURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-125 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href={user.facebookURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:scale-125 transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href={user.linkedInURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href={user.twitterURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaTwitter />
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>

            {/* Image */}
            <img
              src={
                user.avatar?.url ||
                "https://via.placeholder.com/400"
              }
              alt="profile"
              className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full object-cover object-top border-4 border-white dark:border-zinc-800 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;