import React from "react";

const projects = [
  {
    name: "Neighborgood",
    logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/673377d2636812ab650f04a9_65ca66431f754cba27bad9c4_NaighborGood(Logo)%20(1)-p-500.png",
    leader: "Purnendu Thamb",
    role: "Lead Developer, Neighborgood",
    profileImage:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bdf32ed73b9d632859a762_purnedu.jpg",
    linkedin: "https://www.linkedin.com/in/purnendu-thamb-00b1b8227/",
    description:
      "NeighborGood aims to create the simplest platform for neighborhoods to connect, using an AI agent that acts as a social extrovert to find activities for people to enjoy together.",
    funding: "$61,500",
  },
  {
    name: "Devisai",
    logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/673377d2636812ab650f04a9_65ca66431f754cba27bad9c4_NaighborGood(Logo)%20(1)-p-500.png",
    leader: "Naman Jain",
    role: "Leader, DevisAI",
    profileImage:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb9ed3dd86dcb2c1763e_Naman%20Jain(Devis%20AI)-min-p-500.jpg",
    linkedin: "https://www.linkedin.com/in/naman-jain-444a3b266",
    description:
      "Generate up to 20 meme tokens daily. Users vote, and the top-voted coin gets featured on pump.fun with their website, Twitter, and Telegram channel.",
    funding: "$10,500",
  },
];

export default function Completed() {
  return (
    <div className="pb-8">
      <h2 class="text-4xl mt-12 max-w-6xl mx-auto text-center font-bold dark:text-white">
        Completed Startupathon Challenges
      </h2>
      <p class="text-2xl mb-8 font-normal text-center text-white max-w-4xl mx-auto">
        People like you have cracked Startupathon challenges and are now leading
        thriving startups.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-purple-500 p-6 rounded-xl text-white bg-gray-900"
          >
            <div className="flex justify-center items-center mb-8">
              <h3 className="text-2xl font-bold text-center">{project.name}</h3>
              <img
                className="w-8 h-8 mx-2"
                src={project.logo}
                alt={project.name}
              />
            </div>

            <div className="h-54 items-start flex flex-col sm:flex-row items-center">
              <img
                src={project.profileImage}
                alt={project.leader}
                className="w-32 h-32 sm:w-44 sm:h-50 rounded-md mb-4 sm:mb-0"
              />
              <div className="sm:ml-4 text-center sm:text-left">
                <p className="text-md font-bold">{project.leader}</p>
                <p className="text-xs">{project.role}</p>
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
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
                <p className="text-xs">{project.description}</p>
              </div>
            </div>
            <h3 className="text-xl font-bold my-4 text-center">
              Initial Funding Offered: <span>{project.funding}</span>
            </h3>
            <button className="focus:outline-none text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 transition-colors w-full">
              View More Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
