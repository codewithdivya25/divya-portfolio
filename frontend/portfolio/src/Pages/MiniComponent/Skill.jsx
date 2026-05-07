import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getMySkills = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/skill/getall",
          { withCredentials: true }
        );
        setSkills(data.skills || []);
      } catch (error) {
        console.log(error);
      }
    };
    getMySkills();
  }, []);

  return (
    <section  id="skills" className="relative px-4 sm:px-8 lg:px-20 py-20 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-indigo-500"></div>

          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>

          <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
            >
              {/* INNER CARD */}
              <div className="h-full w-full backdrop-blur-xl bg-white/60 dark:bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg group-hover:shadow-2xl transition">

                {/* ICON BG */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 group-hover:scale-110 transition">
                  <img
                    src={skill.svg?.url}
                    alt={skill.title}
                    className="h-8 object-contain"
                  />
                </div>

                {/* TITLE */}
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-indigo-500 transition">
                  {skill.title}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;