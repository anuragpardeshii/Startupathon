import React from "react";

const challenges = [
    {
      id: 1,
      title: "RealEstate AI",
      funding: "$10,000",
      description:
        "An AI-powered real estate platform that optimizes property valuation, investment strategies, and market insights using machine learning to enhance decision-making and profitability.",
      image:
        "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67d19cf742c8edb7372e995c_Untitled_design_-_2025-03-12T200934.604-removebg-preview%20(1).png",
      deadline: "March 31, 2025",
    },
    {
      id: 2,
      title: "Horizon",
      funding: "$20,000",
      description:
        "An open-source platform to educate, connect, and empower users on social causes through storytelling, curated content, and interactive features.",
      image:
        "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67da7779e9f3d7475ef5fa13_horizon.png",
      deadline: "March 23, 2025",
    },
  ];

export default function Challenges() {
  return (
    <div className="py-16 text-center">
      <h2 class="text-4xl text-center font-bold dark:text-white">
        Ongoing Startupathon Challenges
      </h2>
      <p class="text-xl font-normal text-gray-500 dark:text-gray-400">
        Start your journey—tackle live challenges, earn equity, and lead the
        future.
      </p>
      <div class="mt-0 px-0 pt-8 flex items-center gap-4 sm:w-full sm:mt-5 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="border bg-[#2c2050]/55 hover:bg-black p-4 border-violet-500/30 shadow-[#7a56d6] shadow-sm rounded-2xl max-w-sm"
            >
              <img
                src={challenge.image}
                alt={challenge.title}
                className="mx-auto h-32 m-2"
              />
              <h3 className="text-white font-bold text-2xl">
                {challenge.title}
              </h3>
              <p className="text-violet-500 mb-2 text-lg font-bold">
                Initial Funding Offered: <span>{challenge.funding}</span>
              </p>
              <p className="text-white h-20 text-sm my-2">{challenge.description}</p>
              <div className="flex items-center">
                <img
                  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png"
                  alt="Deadline Icon"
                  className="w-12 m-2"
                />
                <div className="text-start">
                  <p className="text-violet-500 my-4 font-bold text-lg">
                    Deadline approaching! Apply by{" "}
                    <span>{challenge.deadline}</span>
                  </p>
                </div>
              </div>
              <button
                className="focus:outline-none text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 transition-colors w-full"
              >
                View Challenge Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
