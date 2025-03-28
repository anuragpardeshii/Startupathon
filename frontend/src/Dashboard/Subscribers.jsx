import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);

  // Fetch subscribers from the backend
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/subscribers`);
        setSubscribers(response.data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    fetchSubscribers();
  }, []);

  // Handle deleting a subscriber
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URI}/api/subscribers/${id}`);
      setSubscribers(subscribers.filter(subscriber => subscriber._id !== id)); // Remove deleted subscriber from state
    } catch (error) {
      console.error("Error deleting subscriber:", error);
    }
  };

  return (
    <>
      <h3 className="font-bold w-100 text-gray-700 mb-4 text-xl">Subscribers</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr
                key={subscriber._id}
                className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{subscriber.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(subscriber._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
