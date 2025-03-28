import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-neutral-800">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
                className="h-12 mb-8"
                alt="Persist Logo"
              />
              {/* <h3 className="text-2xl font-bold mb-4">Bagiya</h3> */}
              <p className="text-neutral-400 mb-6 max-w-lg">
                We partner with entrepreneurs and businesses to help scale and
                grow their ideas. With a diverse team skilled in every sector
                there is no business we can not help get a leg up.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@persistventures"
                  className="text-neutral-400 hover:text-[#7a56d6] transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/persist-ventures"
                  className="text-neutral-400 font-semi-bold hover:text-[#7a56d6] transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                <a
                  href="https://www.instagram.com/persistventures"
                  className="text-neutral-400 hover:text-[#7a56d6] transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", id: "home" },
                  { name: "Investor Application", id: "investor" },
                  { name: "Job Application", id: "application" },
                  { name: "Apply To Startup Accelator", id: "Startup" },
                  { name: "Career Accelerator Program", id: "career" },
                  { name: "Our Team", id: "team" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7a56d6] md:p-0 md:dark:hover:text-[#7a56d6] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {item.name}{" "}
                      {/* Fixed: Use item.name instead of item.label */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                {[
                  { name: "Terms of Service", id: "terms" },
                  { name: "Privacy Policy", id: "investor" },
                  {
                    name: "Decentralized Intelligence Agency",
                    id: "application",
                  },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7a56d6] md:p-0 md:dark:hover:text-[#7a56d6] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {item.name}{" "}
                      {/* Fixed: Use item.name instead of item.label */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
