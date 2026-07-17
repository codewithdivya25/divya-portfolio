import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const About = () => {
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
    <section  id="about" className="relative px-4 sm:px-8 lg:px-20 py-20 overflow-hidden">

      {/* 🔥 GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* 🔥 PREMIUM HEADING */}
        <div className="flex flex-col items-center mb-14">

          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-indigo-500"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>

            <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>

          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">
            Get to know me better
          </p>
        </div>

        {/* 🔥 MAIN */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-30"></div>

              <img
                src={user.avatar?.url }
                alt="profile"
                className="relative w-64 h-64 object-cover object-top    rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl"
          >

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Hi, I'm{" "}
              <span className="text-indigo-500 font-semibold">
                {user.fullName || "Divya"}
              </span>
              , a passionate MERN stack developer.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {user.aboutme ||
                "I build modern, scalable and high-performance web applications with clean UI and smooth UX."}
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy working on both frontend and backend, and I love learning new technologies every day.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;