import React, { useEffect, useState } from "react";

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/challenges`);
        if (!response.ok) {
          throw new Error("Failed to fetch challenges");
        }
        const data = await response.json();
        setChallenges(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (loading) {
    return <p className="text-center text-white text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg">{error}</p>;
  }

  return (
    <section id="ongoing-startup" className="py-16 text-center md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
        Ongoing Startupathon Challenges
      </h2>
      <p className="text-lg md:text-xl font-normal text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-2">
        Start your journey—tackle live challenges, earn equity, and lead the
        future.
      </p>

      {/* Challenges Grid */}
      <div className="mt-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
          {challenges
            .filter((challenge) => challenge.visibility) // Only include visible challenges
            .slice(0, visibleCount)
            .map((challenge) => (
              <div
                key={challenge._id?.$oid || challenge._id}
                className="border bg-[#2c2050]/55 hover:bg-black p-6 border-violet-500/30 shadow-lg rounded-2xl transition-all duration-300"
              >
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-white font-bold text-2xl my-3">
                  {challenge.title}
                </h3>
                <p className="text-violet-500 text-lg font-bold mb-2">
                  Initial Funding: ${challenge.funding}
                </p>
                <p className="text-white text-sm my-2 h-20 overflow-hidden">
                  {challenge.description}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png"
                    alt="Deadline Icon"
                    className="w-10 h-10 m-2"
                  />
                  <div className="text-start">
                    <p className="text-violet-500 font-bold text-lg">
                      Deadline:{" "}
                      {new Date(challenge.deadline).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button className="mt-4 text-white bg-[#432d7b] hover:bg-[#5a3d9c] focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-lg px-6 py-3 w-full transition-all">
                  View Challenge Details
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < challenges.length && (
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={loadMore}
            className="text-[#7a56d6] mt-6 rounded-lg text-lg px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
