import React from "react";

const speakers = [
  {
    name: "Cillian Leonowicz",
    title: "Director in Technology Consulting & Blockchain Lead, EY",
    description:
      "Set up a Big 4's first global Blockchain Lab, managed some of the earliest PoC's in Europe and first 'production' systems.",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b40cb604eb57ebef2bf08_k6vSPQLVb8ywxrZDCfscGvegO8SfRmrJo7RrjE07VeQ.jpg",
    linkedin: "https://www.linkedin.com/in/cillianleonowicz",
  },
  {
    name: "Frank Wang",
    title:
      "Transformative Work Lead at Mask Network, Co-Founder at Meson Network, Mask",
    description:
      "Co-founded Meson Network, bootstrapped to reach 2/3 of Akaimai's bandwidth resources in 3 months...",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b305011bf5448aba1a554_i0E99uHOvMYhvfcVhcnBWFL4qo0Rjkt_fkoJRePG2n8.png",
    linkedin: "https://www.linkedin.com/in/frank-wang-00a73180",
  },
];

export default function Mentor() {
  return (
    <>
      <h2 class="text-4xl mt-12 max-w-7xl mx-auto text-center font-bold dark:text-white">
        By getting accepted you unlock access to our elite founder network.
      </h2>
      <p class="text-2xl mb-8 font-normal text-center text-white max-w-4xl mx-auto">
        Join Persist and gain access to our 400+ millionaire and billionaire
        startup network
      </p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="border border-purple-500 p-4 rounded-xl text-white bg-gray-900 shadow-md"
            >
              <img
                src={speaker.image}
                className="w-full mb-4 h-40 object-cover rounded-md"
                alt={speaker.name}
              />
              <p className="text-lg font-bold">{speaker.name}</p>
              <p className="text-sm font-medium h-18">{speaker.title}</p>
              <p className="text-sm text-gray-400">{speaker.description}</p>
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="flex items-center justify-center w-full mt-4 rounded-lg text-lg px-4 py-2 bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold"
                >
                  <svg
                    className="w-6 h-6 me-2 text-white"
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
                  LinkedIn
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
      <h1 class="text-4xl mt-12 max-w-7xl mx-auto text-center font-bold dark:text-white">
        You are just one <span className="text-purple-500">Startupathon Challenge</span> away from an exciting career as
        the <span className="text-purple-500">founder of a company</span>, with a <span className="text-purple-500">full salary</span> and <span className="text-purple-500">ownership</span> in what you
        build.
      </h1>
    </>
  );
}
