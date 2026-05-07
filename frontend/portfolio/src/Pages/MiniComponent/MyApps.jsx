import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getMyApps = async () => {
      try {
        const { data } = await axios.get(
  "http://localhost:4000/api/v1/softwareapplication/getall",
  { withCredentials: true }
);

setApps(data.applications || []);
      } catch (error) {
        console.log(error);
      }
    };
    getMyApps();
  }, []);

  return (
    <section id="myapps" className="relative px-4 sm:px-8 lg:px-20 py-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* ✅ FIXED HEADING (same style like Skills/Portfolio) */}
        <div className="flex items-center justify-center gap-4 mb-16">

          <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Apps
            </span>
          </h1>

          <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {apps.map((app, index) => (
            <motion.div
              key={app._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-20 rounded-full"></div>

                <img
                  src={app.svg?.url}
                  alt={app.name}
                  className="relative h-12 sm:h-16 object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 text-center font-medium">
                {app.name}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MyApps;