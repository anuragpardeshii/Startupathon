import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    funding: "",
    deadline: "",
    description: "",
    image: "",
    visibility: true,
  });

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URI}/api/challenges`
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

  const handleEdit = (challenge) => {
    setSelectedChallenge(challenge);
    setFormData(challenge);
    setEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("funding", formData.funding);
      formDataToSend.append("deadline", formData.deadline);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("visibility", formData.visibility);

      // Append image only if a new file is uploaded
      if (formData.image instanceof File) {
        formDataToSend.append("image", formData.image);
      }

      await axios.put(
        `${import.meta.env.VITE_BACKEND_URI}/api/challenges/${selectedChallenge._id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setChallenges(
        challenges.map((ch) =>
          ch._id === selectedChallenge._id ? formData : ch
        )
      );
      setEditModalOpen(false);
    } catch (err) {
      console.error("Failed to update challenge", err);
    }
  };

  const handleAddChallenge = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/challenges`,
        formData
      );
      setChallenges([...challenges, response.data]);
      setAddModalOpen(false);
    } catch (err) {
      console.error("Failed to add challenge", err);
    }
  };

  const toggleVisibility = async (id) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URI}/api/challenges/${id}/visibility`
      );
      setChallenges((prevChallenges) =>
        prevChallenges.map((challenge) =>
          challenge._id === id
            ? { ...challenge, visibility: response.data.visibility }
            : challenge
        )
      );
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/challenges`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Challenge added successfully!");
        setIsOpen(false);
        setFormData({
          title: "",
          funding: "",
          description: "",
          image: "",
          deadline: "",
          visibility: true,
        });
      } else {
        // alert("Failed to add challenge.");
      }
    } catch (error) {
      console.error("Error adding challenge:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-700 text-xl">
          Challenges Management
        </h3>
        <button
          onClick={() => setIsOpen(true)}
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-[#3f2d6d] hover:bg-[#7a56d6]"
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
                <th className="px-6 py-3">S. No</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Funding</th>
                <th className="px-6 py-3">Deadline</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Visibility</th>
                <th className="px-6 py-3">Edit</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((challenge, index) => (
                <tr
                  key={challenge._id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th className="px-6 py-4 font-medium text-gray-900">
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
                  <td className="px-2 py-4">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-20 rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className={`px-3 py-1 text-sm font-medium rounded-lg ${
                        challenge.visibility
                          ? "bg-green-500 text-white"
                          : "bg-gray-400 text-black"
                      }`}
                      onClick={() => toggleVisibility(challenge._id)}
                    >
                      {challenge.visibility ? "Visible" : "Hidden"}
                    </button>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(challenge)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isEditModalOpen && (
        <Modal
          title="Edit Challenge"
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveEdit}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {isAddModalOpen && (
        <Modal
          title="Add Challenge"
          onClose={() => setAddModalOpen(false)}
          onSave={handleAddChallenge}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-6 rounded-2xl shadow-xl w-96"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Add Challenge
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="title"
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a56d6]"
                required
              />
              <input
                name="funding"
                type="number"
                placeholder="Funding"
                value={formData.funding}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a56d6]"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a56d6]"
                required
              ></textarea>
              <input
                name="image"
                type="url"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a56d6]"
                required
              />
              <input
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a56d6]"
                required
              />
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  name="visibility"
                  type="checkbox"
                  checked={formData.visibility}
                  onChange={(e) =>
                    setFormData({ ...formData, visibility: e.target.checked })
                  }
                  className="w-5 h-5 text-[#7a56d6]"
                />
                <span>Visible</span>
              </label>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#7a56d6] text-white rounded-lg hover:bg-[#5a3db2] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function Modal({ title, onClose, onSave, formData, setFormData }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  return (
    <div className="fixed z-[100]  inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-6 rounded-2xl shadow-xl max-h-[80vh] overflow-y-auto w-full max-w-xl md:max-w-md sm:max-w-sm relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h3 className="text-xl md:text-lg font-semibold text-gray-800 mb-4 text-center">
          {title}
        </h3>

        {/* Scrollable Form Container */}
        <div className="space-y-4 px-1">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Title"
          />

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            type="number"
            value={formData.funding}
            onChange={(e) =>
              setFormData({ ...formData, funding: e.target.value })
            }
            placeholder="Funding"
          />

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            type="date"
            value={formData.deadline.split("T")[0]}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
          />

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none text-sm"
            rows="3"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Description"
          />

          {/* Visibility Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.visibility}
              onChange={(e) =>
                setFormData({ ...formData, visibility: e.target.checked })
              }
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
            />
            <label className="text-gray-700 text-sm">Make Public</label>
          </div>

          {/* Image Upload */}
          <label className="block text-gray-600 font-medium text-sm">
            Upload Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="block w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2 text-sm"
          />

          {/* Image Preview */}
          {formData.image && (
            <div className="mt-2">
              <img
                src={
                  formData.image instanceof File
                    ? URL.createObjectURL(formData.image)
                    : formData.image
                }
                alt="Preview"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4">
          <button
            onClick={onSave}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition text-sm"
          >
            Save Changes
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition text-sm mt-2"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
