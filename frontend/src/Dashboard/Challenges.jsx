import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/challenges"
        );
        setChallenges(response.data);
      } catch (err) {
        setError("Failed to fetch challenges");
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-700 text-xl">
          Challenges Management
        </h3>
        <button
          type="button"
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-[#3f2d6d] hover:bg-[#7a56d6] focus:ring-4 focus:outline-none focus:ring-[#7a56d6]"
        >
          Add Challenge
        </button>
      </div>

      {loading ? (
        <p className="text-gray-600 text-center">Loading challenges...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S. No
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Funding
                </th>
                <th scope="col" className="px-6 py-3">
                  Deadline
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((challenge, index) => (
                <tr
                  key={challenge._id}
                  className="bg-white border-b border-gray-200 hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{challenge.title}</td>
                  <td className="px-6 py-4">
                    ${challenge.funding.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(challenge.deadline).toLocaleDateString("en-US")}
                  </td>
                  <td className="px-6 py-4">
                    {challenge.description.substring(0, 50)}...
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-16 h-16 rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
