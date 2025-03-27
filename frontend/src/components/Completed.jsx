import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Completed() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchCompleters();
  }, []);

  const fetchCompleters = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/completers");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching Completers:", error);
    }
  };

  return (
    <div className="pb-8">
      <h2 className="text-2xl mb-4 md:text-3xl sm:text-2xl mt-12 max-w-6xl mx-auto text-center font-bold dark:text-white">
        Completed Startupathon Challenges
      </h2>
      <p className="text-xl md:text-xl sm:text-lg mb-8 font-normal text-center text-white max-w-4xl mx-auto">
        People like you have cracked Startupathon challenges and are now leading
        thriving startups.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="border border-[#7a56d6] p-6 rounded-xl text-white bg-gray-900 flex flex-col"
          >
            {/* Project Name and Logo */}
            <div className="flex justify-center items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-center">
                {project.name}
              </h3>
              <img
                className="w-8 h-8 mx-2"
                src={project.logo}
                alt={`logo for ${project.name}`}
                onError={(e) => {
                  e.target.src = "/fallback-logo.png"; // Fallback image
                }}
              />
            </div>

            {/* Profile Image & Leader Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img
                src={project.profilePicture}
                alt={project.role}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-45 md:h-55 rounded-md object-cover flex-shrink-0"
                onError={(e) => {
                  e.target.src = "/fallback-profile.png"; // Fallback image
                }}
              />

              <div className="sm:ml-4 text-center">
                <p className="text-lg font-bold sm:text-left">
                  {project.leader}
                </p>
                <p className="text-sm sm:text-left">{project.role}</p>
                <p className="flex items-center justify-center md:justify-start">
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center md:justify-start"
                  >
                    <svg
                      className="w-6 h-6 bg-blue-500 rounded-sm my-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                </p>
                <p className="text-sm sm:text-left">{project.description}</p>
              </div>
            </div>

            {/* Funding Info */}
            <h3 className="text-lg sm:text-xl font-bold my-4 text-center">
              Initial Funding Offered: <span>{project.funding}</span>
            </h3>

            {/* Button */}
            <button className="focus:outline-none text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 transition-colors w-full">
              View More Details
            </button>
          </div>
        ))}
      </div>

      {/* Show "See More" button only if there are more projects to load */}
      {visibleCount < projects.length && (
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="flex items-center justify-center text-[#7a56d6] mt-4 rounded-lg text-lg px-4 py-2 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
