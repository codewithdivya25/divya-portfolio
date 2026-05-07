import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getMyProjects = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/project/getall",
          { withCredentials: true }
        );
        setProjects(data.projects || []);
      } catch (error) {
        console.log(error);
      }
    };
    getMyProjects();
  }, []);

  const visibleProjects = viewAll ? projects : projects.slice(0, 9);

  return (
    <section  id="project" className="px-4 sm:px-8 lg:px-20 py-20">

      {/* ✅ HEADING (FIXED + PREMIUM) */}
      <div className="flex items-center justify-center gap-4 mb-16">

        <div className="h-[2px] w-10 sm:w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Work
          </span>
        </h1>

        <div className="h-[2px] w-10 sm:w-20 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>

      </div>

      {/* ✅ GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {visibleProjects.map((project) => (
          <Link to={`/project/${project._id}`}>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">

              {/* IMAGE */}
              <img
                src={project.projectBanner?.url}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>

              {/* BOTTOM GRADIENT */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>

            </div>

          </Link>
        ))}

      </div>

      {/* ✅ BUTTON */}
      {projects.length > 9 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            {viewAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

    </section>
  );
};

export default Portfolio;