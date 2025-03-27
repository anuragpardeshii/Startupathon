import React from "react";

export default function Guide() {
  return (
    <div className="py-20 px-4">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
          Found an idea that matches your skills?
        </h2>
        <p className="mb-8 text-lg sm:text-xl text-gray-500 dark:text-gray-400">
          Here’s a simple guide on how the Startupathon process works once you
          find a project idea that suits your skills.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#7a56d6]"></div>
          <div className="space-y-16 sm:space-y-32">
            {[
              {
                title: "Dive into the Challenge Details Video",
                description:
                  "Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.",
                tip: "Pay attention—it’s more than just instructions. It’s your roadmap to success!",
                icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/67194d6803b1bb4c2483b4fb_icons8-start-100.png",
              },
              {
                title: "Build, Submit & Shine",
                description:
                  "Create a prototype that showcases your approach, then submit your work with a Loom video presentation. Your creative solution is what matters most.",
                tip: "Submit on time or early to show your dedication!",
                icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719b898b850d820a0151895_icons8-submit-idea-100.png",
              },
              {
                title: "Get Feedback, Level Up!",
                description:
                  "Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve.",
                tip: "Use feedback to sharpen your submission or learn what it takes to win!",
                icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719be4a8ec2af8db1816720_icons8-feedback-100.png",
              },
              {
                title: "Claim Your Crown",
                description:
                  "Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary.",
                tip: "",
                icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719c1ccefbcd50505f5d302_icons8-checked-96.png",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 animate__animated animate__fadeInLeft"
              >
                <div className="md:grid md:grid-cols-2 items-center md:gap-12">
                  <div className="text-left md:text-right sm:ms-4 md:pr-12">
                    <h3 className="text-2xl sm:text-[2rem] font-bold text-white mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <div className="p-6 sm:ms-4 shadow-2xl rounded-lg mt-4 md:mt-0 bg-gray-900">
                    <ul className="text-white space-y-2">
                      <li className="font-semibold text-lg">
                        {step.description}
                      </li>
                      {step.tip && (
                        <li className="text-sm">
                          💡 <span className="font-bold">Pro Tip:</span>{" "}
                          {step.tip}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="absolute hidden md:block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-8 bg-white rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl sm:text-4xl px-2 py-8 text-center font-bold dark:text-white">
          Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive
        </h2>
        <div className="relative w-full h-0 pb-[56.25%] max-w-4xl mx-auto border border-[#7a56d6]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pn_HoowYNTQ"
            title="Maximize Your Webapp's Potential with V0 by Vercel and Claude"
            allowFullScreen
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl sm:text-4xl px-2 py-8 text-center font-bold dark:text-white">
          Our Hiring Process: Shared Through Candidate Stories
        </h2>
        <div className="relative w-full h-0 pb-[56.25%] max-w-4xl mx-auto border border-[#7a56d6]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?t=0"
            title="Hiring Process"
            allowFullScreen
          />
        </div>
      </div>

      <div className="border bg-black bg-[url('https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b11fd45340feac208ae1ae_Untitled%20design%20(48).png')] w-full max-w-6xl mx-auto rounded-xl text-center border-[#7a56d6] p-8 mt-12">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
          Got an idea of your own?
        </h2>
        <p className="text-lg sm:text-xl text-white my-4 max-w-4xl mx-auto">
          We are always on the lookout for visionaries with great startup ideas.
          If that’s you, apply below for our Fellowship program.
        </p>
        <button
          type="button"
          className="text-white font-medium rounded-lg text-md sm:text-lg px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#3f2d6d] via-[#7a56d6] to-[#9077ce] hover:bg-[#7a56d6] focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Apply For Fellowship
        </button>
      </div>
    </div>
  );
}
