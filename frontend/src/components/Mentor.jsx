import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Mentor() {
  const [founders, setFounders] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetchFounders();
  }, []);

  const fetchFounders = () => {
    axios
      .get("http://localhost:3000/api/founders")
      .then((response) => setFounders(response.data))
      .catch((error) => console.error("Error fetching founders:", error));
  };
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
          {founders.slice(0, visibleCount).map((speaker, index) => (
            <div
              key={speaker._id} // Use MongoDB _id as key
              className="border border-[#7a56d6] p-4 rounded-xl text-white bg-gray-900 shadow-md"
            >
              <img
                src={speaker.profilePic}
                className="w-full mb-4 h-40 object-cover rounded-md"
                alt={speaker.name}
              />
              <p className="text-lg font-bold">{speaker.name}</p>
              <p className="text-sm font-medium h-12">{speaker.position}</p>
              <p className="text-sm text-gray-400 h-16">
                {speaker.bioHighlights}
              </p>
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
        {visibleCount < founders.length && (
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(visibleCount + 8)}
              className="flex items-center justify-center text-[#7a56d6] mt-4 rounded-lg text-lg px-4 py-2 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold"
            >
              See More
            </button>
          </div>
        )}
      </div>
      <h1 class="text-4xl my-12 max-w-7xl mx-auto text-center font-bold dark:text-white">
        You are just one{" "}
        <span className="text-[#7a56d6]">Startupathon Challenge</span> away from
        an exciting career as the{" "}
        <span className="text-[#7a56d6]">founder of a company</span>, with a{" "}
        <span className="text-[#7a56d6]">full salary</span> and{" "}
        <span className="text-[#7a56d6]">ownership</span> in what you build.
      </h1>
      <div className="mx-4">
        <div className="max-w-xl mx-auto p-4 m-4 rounded-lg bg-white">
          <div className="flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-12 mx-2 rounded-4xl"
            />
            <div className="flex-1">
              <p className="font-bold flex">
                Jonny Clifford{" "}
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 22 22"
                    aria-label="Verified account"
                    role="img"
                    className="w-4 h-4 m-1 fill-current"
                    data-testid="icon-verified"
                  >
                    <g>
                      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                    </g>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 font-semibold">
                @jonnyclifford &#x2022;{" "}
                <span className="text-blue-500 font-bold">Follow</span>
              </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
              alt=""
              className="w-6 h-6 mx-2"
            />
          </div>
          <div>
            <h3 className="text-lg m-2">
              Maddening how many people think that not doing a startup is best
              way to get better at doing a startup
            </h3>
          </div>
          <img
            src="https://pbs.twimg.com/media/GS7YuiNWoAA2tyG?format=jpg&name=small"
            alt=""
            className="border border-gray-400 my-2 rounded-xl"
          />
          <p className="mx-1 py-1 text-gray-700 border-b-1 border-gray-300">
            5:08 PM · Jul 20, 2024
          </p>
          <div className="flex mt-2 items-center">
            <div className="flex items-center">
              <svg
                class="w-6 h-6 text-red-600 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>
              <p className="m-1">49</p>
            </div>
            <div className="flex items-center">
              <svg
                class="w-6 h-6 text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="m-1">23</p>
            </div>
            <p className="flex items-center">
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 26"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                />
              </svg>
              Copy Link
            </p>
          </div>
        </div>
      </div>
      <div className="mx-4">
      <div className="border my-20 bg-black bg-[url('https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b11fd45340feac208ae1ae_Untitled%20design%20(48).png')] w-full max-w-5xl mx-auto rounded-xl text-center border-[#7a56d6] p-8">
        <p class="text-xl font-normal text-white px-4 my-4 max-w-4xl mx-auto">
          Sign up to get notified first about new Startupathon projects and
          receive updates through our newsletter.
        </p>

        <form class="flex items-center max-w-xs mx-auto">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none"></div>
            <input
              type="text"
              id="voice-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your email ID"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-[#3f2d6d] ms-2 hover:bg-[#7a56d6] focus:ring-4 focus:outline-none focus:ring-[#7a56d6]"
          >
            Search
          </button>
        </form>

        <img src="" alt="" />
        </div>
        </div>
    </>
  );
}
