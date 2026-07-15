import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectView = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios.get(
          `https://backend-portfolio-1-3m3a.onrender.com/api/v1/project/getsingle/${id}`,
          { withCredentials: true }
        );
        setProject(res.data.project);
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching project");
      }
    };

    getProject();
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600 dark:text-gray-300">
        Loading Project...
      </div>
    );
  }

  const descriptionList = project.description?.split(". ") || [];
  const technologiesList = project.technologies?.split(", ") || [];

  return (
    <div className="relative min-h-screen px-4 sm:px-10 lg:px-24 py-16 bg-gray-50 dark:bg-black text-black dark:text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:scale-105 transition"
        >
          ← Back
        </button>

        {/* CARD */}
        <div className="backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10">

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl mb-8">
            <img
              src={project.projectBanner?.url || "/avatarHolder.jpg"}
              alt="project"
              className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Description
            </h2>

            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
              {descriptionList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* TECHNOLOGIES */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-2">
              {technologiesList.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-gray-300 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">

            <div className="p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="font-semibold mb-1">Stack</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.stack}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="font-semibold mb-1">Deployed</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.deployed}
              </p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href={project.gitRepoLink}
              target="_blank"
              className="flex-1 text-center px-5 py-3 rounded-full bg-gray-900 text-white hover:scale-105 transition"
            >
              GitHub Repo
            </a>

            <a
              href={project.projectLink}
              target="_blank"
              className="flex-1 text-center px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:scale-105 transition"
            >
              Live Project
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectView;