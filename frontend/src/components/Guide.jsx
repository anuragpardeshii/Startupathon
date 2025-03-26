import React from "react";

export default function Guide() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 class="text-4xl text-center font-bold dark:text-white">
          Found an idea that matches your skills?
        </h2>
        <p class="mb-8 text-xl font-normal text-gray-500 dark:text-gray-400">
          Here’s a simple guide on how the Startupathon process works once you
          find a project idea that suits your skills.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500"></div>
          <div className="space-y-32">
            <div className="relative pl-8 md:pl-0 animate__animated animate__fadeInLeft">
              <div className="md:grid md:grid-cols-2 items-center md:gap-12">
                <div className="md:text-right sm:ms-4 md:pr-12">
                  <h3 className="text-[2rem] font-bold text-white mb-2">
                    Dive into the Challenge Details Video
                  </h3>
                </div>
                <div className="p-6 sm:ms-4 rounded-lg mt-4 md:mt-0">
                  <ul className="text-white space-y-2">
                    <li className="font-bold text-xl text-[#7a56d6]">
                      It all starts here!
                    </li>
                    <li className="font-semibold text-lg text-white">
                      Receive an exciting task—your startup idea—with a detailed
                      video to spark creativity and clarify our vision.
                    </li>
                    <li className="text-sm">
                      💡
                      <span className="text-extrabold text-sm">
                        Pro Tip :
                      </span>{" "}
                      Pay attention—it’s more than just instructions. It’s your
                      roadmap to success!
                    </li>
                  </ul>
                </div>
              </div>
              {/* dot */}
              <div className="absolute hidden md:block left-0 md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#121212]">
                <img
                  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/67194d6803b1bb4c2483b4fb_icons8-start-100.png"
                  alt=""
                  className="w-8 bg-white rounded-md"
                />
              </div>
            </div>

            <div className="relative pl-8 md:pl-0 animate__animated animate__fadeInLeft">
              <div className="md:grid md:grid-cols-2 items-center md:gap-12">
                <div className="md:text-right sm:ms-4 md:pr-12">
                  <h3 className="text-[2rem] font-bold text-white mb-2">
                    Build, Submit & Shine
                  </h3>
                </div>
                <div className="sm:ms-4 p-6 shadow-2xl rounded-lg mt-4 md:mt-0">
                  <ul className="text-white space-y-2">
                    <li className="font-semibold text-lg text-white">
                      Create a prototype that showcases your approach, then
                      submit your work with a Loom video presentation (no GitHub
                      repo or complex code required). Your creative solution is
                      what matters most.
                    </li>
                    <li className="text-sm">
                      💡
                      <span className="text-extrabold text-sm">
                        Stay ahead :
                      </span>{" "}
                      Submit on time or early to show your dedication!
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute hidden md:block left-0 md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 rounded-md bg-[#121212]">
                <img
                  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719b898b850d820a0151895_icons8-submit-idea-100.png"
                  alt=""
                  className="w-8 bg-white rounded-md"
                />
              </div>
            </div>

            <div className="relative pl-8 md:pl-0 animate__animated animate__fadeInLeft">
              <div className="md:grid md:grid-cols-2 items-center md:gap-12">
                <div className="md:text-right sm:ms-4 md:pr-12">
                  <h3 className="text-[2rem] font-bold text-white mb-2">
                    Get Feedback, Level Up!
                  </h3>
                </div>
                <div className="sm:ms-4 p-6 shadow-2xl rounded-lg mt-4 md:mt-0">
                  <ul className="text-white space-y-2">
                    <li className="font-semibold text-lg text-white">
                      Three days after submission, we review your work. If it
                      stands out, you're in! If not, we'll share feedback on how
                      to improve. The cycle continues until we find the perfect
                      fit.
                    </li>
                    <li className="text-sm">
                      💡
                      <span className="text-extrabold text-sm">
                        Pro tip :
                      </span>{" "}
                      This feedback is gold. Use it to sharpen your submission
                      or learn what it takes to win!
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute hidden md:block left-0 md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 rounded-md bg-[#121212]">
                <img
                  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719be4a8ec2af8db1816720_icons8-feedback-100.png"
                  alt=""
                  className="w-8 bg-white rounded-md"
                />
              </div>
            </div>

            <div className="relative pl-8 md:pl-0 animate__animated animate__fadeInLeft">
              <div className="md:grid md:grid-cols-2 items-center md:gap-12">
                <div className="md:text-right sm:ms-4 md:pr-12">
                  <h3 className="text-[2rem] font-bold text-white mb-2">
                    Claim Your Crown
                  </h3>
                </div>
                <div className="sm:ms-4 p-6 shadow-2xl rounded-lg mt-4 md:mt-0">
                  <ul className="text-white space-y-2">
                    <li className="font-bold text-xl text-[#7a56d6]">
                      Ace the challenge to become the project leader.
                    </li>
                    <li className="font-semibold text-lg text-white">
                      Lead the Project. Ace the challenge, and take charge as
                      BOSS. Enjoy ownership, 20% equity, and a competitive
                      salary. Turn vision into impact with top-tier talent!
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute hidden md:block left-0 md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 rounded-md bg-[#121212]">
                <img
                  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719c1ccefbcd50505f5d302_icons8-checked-96.png"
                  alt=""
                  className="w-8 bg-white rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-4xl px-2 py-8 max-w-6xl mx-auto mt-12 text-center font-bold dark:text-white">
        Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A
        Startupathon Success)
      </h2>
      <iframe
        class="embedly-embed"
        src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fpn_HoowYNTQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dpn_HoowYNTQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fpn_HoowYNTQ%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
        width="940"
        className="max-w-4xl mx-auto border border-purple-500"
        height="528"
        scrolling="no"
        allowfullscreen
        title="Maximize Your Webapp's Potential with V0 by Vercel and Claude"
      />

      <h2 class="text-4xl px-2 py-8 max-w-6xl mx-auto mt-12 text-center font-bold dark:text-white">
        Our Hiring Process: Shared Through Candidate Stories
      </h2>
      <iframe
        src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?t=0"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        width="940"
        className="max-w-4xl mx-auto border border-purple-500"
        height="528"
        scrolling="no"
        allowfullscreen
      />
      <br />
      <br />
      <div className="border bg-black  w-full max-w-6xl mx-auto rounded-xl text-center border-purple-500 p-8">
        <h2 class="text-4xl max-w-6xl mx-auto text-center font-bold dark:text-white">
          Got an idea of your own?
        </h2>
        <p class="text-xl font-normal text-white my-4 max-w-4xl mx-auto">
          We are always on the lookout for visionaries with great startup ideas,
          ready to become successful founders. If that’s you, apply below for
          our Fellowship program.
        </p>
        <button
          type="button"
          className="text-white font-medium rounded-lg text-md px-4 py-2 bg-gradient-to-r from-[#3f2d6d] via-[#7a56d6] to-[#9077ce] hover:bg-[#7a56d6] focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Apply For Fellowship
        </button>
        <img src="" alt="" />
      </div>
    </div>
  );
}
