import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const getMyTimeline = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/timeline/getall",
          { withCredentials: true }
        );
        setTimeline(data?.timelines || []);
      } catch (error) {
        console.log(error);
      }
    };
    getMyTimeline();
  }, []);

  // 🔥 scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // line height animation
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline"
      ref={ref}
      className="relative px-4 sm:px-8 lg:px-20 py-20 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* HEADING */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <div className="h-[2px] w-10 sm:w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Timeline
          </span>
        </h1>

        <div className="h-[2px] w-10 sm:w-20 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">

        {/* BASE LINE */}
        <div className="absolute left-3 top-0 h-full w-[3px] bg-gray-200 dark:bg-white/10"></div>

        {/* 🔥 ANIMATED LINE */}
        <motion.div
          style={{ height }}
          className="absolute left-3 top-0 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top"
        ></motion.div>

        {timeline.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12 mb-14"
          >
            {/* DOT */}
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-white dark:border-black shadow-lg animate-pulse"></div>

            {/* CARD */}
            <div className="relative backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition"></div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-indigo-400 mt-2 mb-3">
                {item?.timeline?.from
                  ? `${item.timeline.from} - ${item.timeline.to || "Present"}`
                  : "No Date"}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;