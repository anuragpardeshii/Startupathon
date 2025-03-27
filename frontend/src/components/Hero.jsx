import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
    description: "Competitive Salary",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
    description: "≥ $10,000 USD in Company Funding",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png",
    description: "≥ 10% Founder Equity",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png",
    description: "≥ $100,000 USD AWS Credits",
  },
  {
    id: 5,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
    description: "$1,000 OpenAI Credits",
  },
  {
    id: 6,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png",
    description: "$120,000 USD IBM Cloud Credits",
  },
  {
    id: 7,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png",
    description: "$2,500 Twilio Credits",
  },
  {
    id: 8,
    image:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png",
    description: "$2,000 Airtable Credits",
  },
];

export default function Hero() {
  return (
    <section className="bg-black mb-8 pt-24 relative z-[200] text-white w-full mt-0 mb-0">
      <div className="w-full max-w-[90rem] mx-auto px-4">
        <div className="relative w-full flex flex-col justify-center items-center">
          {/* Image Container with Overlay */}
          <div className="relative w-full max-w-7xl overflow-hidden">
            {/* Team Image */}
            <img
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
              alt="Team"
              srcSet="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped-p-500.png 500w,
           https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped-p-800.png 800w,
           https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png 1009w"
              className="grayscale mt-4 mx-auto w-full h-auto relative z-[16]"
            />
            <div className="absolute bottom-0 top-auto left-0 inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-3/3 z-[20]"></div>
          </div>

          {/* Hero Content */}
          <div className="w-full my-8 max-w-[80rem] flex flex-col justify-center items-center h-full mt-6 relative z-[20]">
            <div className="cursor-pointer self-center px-5 inline-block">
              <h1 className="text-4xl sm:text-6xl font-bold text-transparent  -mt-8 font-bold text-center font-[Montserrat] bg-gradient-to-r from-[#7a56d6] via-[#a58ae9] to-[#efeafc] bg-[200%] animate-[background-pan_3s_linear_infinite] bg-clip-text text-transparent">
                Startupathon
              </h1>
              <h2
                className=" text-2xl font-semibold text-center"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Your Chance to Build, Lead, and Succeed as a Founder
              </h2>
            </div>
            <div className="border m-4 p-4 border-violet-500 rounded-lg w-full md:w-[60%] mt-5 p-2 mx-auto overflow-hidden">
              <div className="relative w-full h-64 sm:h-96">
                {" "}
                {/* 16:9 aspect ratio */}
                <iframe
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.loom.com%2Fembed%2F996f59a2e5c34fd38b86544833c23dde&display_name=Loom&url=https%3A%2F%2Fwww.loom.com%2Fshare%2F996f59a2e5c34fd38b86544833c23dde&image=https%3A%2F%2Fcdn.loom.com%2Fsessions%2Fthumbnails%2F996f59a2e5c34fd38b86544833c23dde-2bf900e52ff1c51c.gif&type=text%2Fhtml&schema=loom"
                  className="w-full h-full border-none rounded-md"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 md:m-8 max-w-6xl text-center mx-auto">
              <a
                href="#"
                className="focus:outline-none text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 transition-colors"
              >
                Ongoing Startupathon
              </a>
              <a
                href="#"
                className="focus:outline-none text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 transition-colors"
              >
                Startupathon Guide
              </a>
              <a
                href="#"
                className="focus:outline-none text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 transition-colors"
              >
                Past Startupathon
              </a>
              <a
                href="#"
                className="focus:outline-none text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 transition-colors"
              >
                Mentor Network
              </a>
            </div>
          </div>
          <div className="my-12">
            <h2
              className="text-xl sm:text-3xl mb-4 font-semibold text-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Startupathon Success Comes with Extraordinary Rewards
            </h2>

            <div className="flex justify-center">
              {/* Grid for larger screens */}
              <div className="hidden mt-8 sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="w-[240px] h-[180px] mx-auto border border-black shadow-sm rounded-xl shadow-[#7a56d6] flex flex-col justify-center items-center text-center bg-[#42307324] px-5"
                  >
                    <div className="w-full flex flex-col items-center">
                      <img
                        src={item.image}
                        alt={item.description}
                        className="w-[50px] h-[50px] mb-2 max-w-full"
                      />
                      <p className="text-sm font-bold">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider for mobile */}
              <div className="sm:hidden w-full max-w-[15rem] mx-auto px-4">
                <Slider
                  // dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  centerMode={true}
                  centerPadding="10px"
                  responsive={[
                    {
                      breakpoint: 640,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ]}
                >
                  {data.map((item) => (
                    <div key={item.id} className="flex justify-center">
                      <div className="w-[180px] mx-auto h-[180px] m-4 border border-black shadow-sm rounded-xl shadow-[#7a56d6] flex flex-col justify-center items-center text-center bg-[#42307324] px-5">
                        <div className="w-full flex flex-col items-center">
                          <img
                            src={item.image}
                            alt={item.description}
                            className="w-[50px] h-[50px] mb-2 max-w-full"
                          />
                          <p className="text-sm font-bold">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
