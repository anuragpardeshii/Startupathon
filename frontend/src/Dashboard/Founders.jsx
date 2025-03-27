import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Founders() {
  const [founders, setFounders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    fetchFounders();
  }, []);

  const fetchFounders = () => {
    axios
      .get("http://localhost:3000/api/founders")
      .then((response) => setFounders(response.data))
      .catch((error) => console.error("Error fetching founders:", error));
  };

  const toggleVisibility = async (id) => {
    try {
      await axios.put(
        `http://localhost:3000/api/founders/${id}/toggle-visibility`
      );
      fetchFounders(); // Refresh the list after update
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };

  const openModal = (founder) => {
    setSelectedFounder(founder);
    setUpdatedData(founder); // Pre-fill form
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFounder(null);
  };

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/founders/${selectedFounder._id}`,
        updatedData
      );
      fetchFounders();
      closeModal();
    } catch (error) {
      console.error("Error updating founder:", error);
    }
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newFounderData, setNewFounderData] = useState({
    name: "",
    position: "",
    location: "",
    profilePic: "",
    bioHighlights: "",
    languages: "",
    techExpertise: "",
    businessLink: "",
    socialLinks: "",
    profileUrl: "",
    visibility: true,
  });

  // Handle Input Changes
  const handleNewFounderChange = (e) => {
    const { name, value } = e.target;
    setNewFounderData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit New Founder
  const handleAddFounder = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/founders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFounderData),
      });

      if (response.ok) {
        alert("Founder added successfully!");
        fetchFounders(); // Refresh the list of founders
        setIsAddModalOpen(false);
        setNewFounderData({
          name: "",
          position: "",
          location: "",
          profilePic: "",
          bioHighlights: "",
          languages: "",
          techExpertise: "",
          businessLink: "",
          socialLinks: "",
          profileUrl: "",
          visibility: true,
        });
      }
    } catch (error) {
      console.error("Error adding founder:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "http://localhost:3000/api/founders/upload-image",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUpdatedData((prev) => ({ ...prev, profilePic: data.imageUrl }));
      } else {
        console.error("Image upload failed:", data.error);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-700 text-xl">Founders Management</h3>
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-[#3f2d6d] ms-2 hover:bg-[#7a56d6] focus:ring-4 focus:outline-none focus:ring-[#7a56d6]"
        >
          Add Founder
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-200">
            <thead className="text-sm text-gray-700 bg-gray-50">
              <tr>
                {[
                  "S.No",
                  "Profile",
                  "Position",
                  "Location",
                  "Bio & Highlights",
                  "Languages",
                  "Tech Expertise",
                  "Business Expertise",
                  "Social Links",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-3 text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {founders.map((founder, index) => (
                <tr
                  key={founder._id}
                  className="bg-white border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 text-center">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">{founder.name}</td>
                  <td className="px-6 py-4">{founder.position}</td>
                  <td className="px-6 py-4">{founder.location}</td>
                  <td className="px-6 py-4">{founder.bioHighlights}</td>
                  <td className="px-6 py-4">{founder.languages}</td>
                  <td className="px-6 py-4">{founder.techExpertise}</td>
                  <td className="px-6 py-4">
                    {founder.businessLink ? (
                      <a
                        href={founder.businessLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Business Link
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {founder.socialLinks ? (
                      <a
                        href={founder.socialLinks}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        LinkedIn
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => toggleVisibility(founder._id)}
                        className={`px-3 py-1 rounded-md text-white transition ${
                          founder.visibility
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                        title={`Click to toggle visibility`}
                      >
                        {founder.visibility ? "Visible" : "Hidden"}
                      </button>
                      <button
                        onClick={() => openModal(founder)}
                        className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                        title="Edit Founder Details"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 sm:p-0">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Founder</h2>

            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <label className="block mb-2 text-sm font-medium">
                Profile Picture:
              </label>
              <img
                src={updatedData.profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
              {/* Upload New Image */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded-md text-sm mb-4"
              />

              {/* Hidden Input to Store Image URL */}
              <input
                type="text"
                name="profilePic"
                value={updatedData.profilePic}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm mb-4"
                placeholder="Enter profile image URL"
              />
            </div>

            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={updatedData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Enter name"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Position:
                </label>
                <input
                  type="text"
                  name="position"
                  value={updatedData.position}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Enter position"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  value={updatedData.location}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Enter location"
                />
              </div>

              {/* Languages */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Languages:
                </label>
                <input
                  type="text"
                  name="languages"
                  value={updatedData.languages}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Enter languages"
                />
              </div>
            </div>

            {/* Full-Width Fields */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Bio Highlights:
              </label>
              <textarea
                name="bioHighlights"
                value={updatedData.bioHighlights}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm h-20 resize-none"
                placeholder="Enter bio"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Tech Expertise:
              </label>
              <input
                type="text"
                name="techExpertise"
                value={updatedData.techExpertise}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter tech expertise"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Business Link:
              </label>
              <input
                type="text"
                name="businessLink"
                value={updatedData.businessLink}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter business link"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Social Links:
              </label>
              <input
                type="text"
                name="socialLinks"
                value={updatedData.socialLinks}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter social links"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-400 text-white rounded-md text-sm hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Founder Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-center">
              Add New Founder
            </h2>

            <label className="block mb-2 text-sm font-medium">
              Profile Picture:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded-md text-sm mb-4"
            />
            {newFounderData.profilePic && (
              <img
                src={newFounderData.profilePic}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mb-4"
              />
            )}

            <label className="block mb-2 text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={newFounderData.name}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4"
              placeholder="Enter name"
            />

            <label className="block mb-2 text-sm font-medium">Position:</label>
            <input
              type="text"
              name="position"
              value={newFounderData.position}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4"
              placeholder="Enter position"
            />

            <label className="block mb-2 text-sm font-medium">Location:</label>
            <input
              type="text"
              name="location"
              value={newFounderData.location}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4"
              placeholder="Enter location"
            />

            <label className="block mb-2 text-sm font-medium">Bio:</label>
            <textarea
              name="bioHighlights"
              value={newFounderData.bioHighlights}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4 h-20 resize-none"
              placeholder="Enter bio"
            />

            <label className="block mb-2 text-sm font-medium">Languages:</label>
            <input
              type="text"
              name="languages"
              value={newFounderData.languages}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4"
              placeholder="Enter languages"
            />

            <label className="block mb-2 text-sm font-medium">
              Tech Expertise:
            </label>
            <input
              type="text"
              name="techExpertise"
              value={newFounderData.techExpertise}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4"
              placeholder="Enter tech expertise"
            />

            <label className="block mb-2 text-sm font-medium">
              Business Link:
            </label>
            <input
              type="text"
              name="businessLink"
              value={newFounderData.businessLink}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4"
              placeholder="Enter business link"
            />

            <label className="block mb-2 text-sm font-medium">
              Social Links:
            </label>
            <input
              type="text"
              name="socialLinks"
              value={newFounderData.socialLinks}
              onChange={handleNewFounderChange}
              className="w-full p-2 border rounded-md text-sm mb-4"
              placeholder="Enter social links"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md text-sm hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFounder}
                className="px-4 py-2 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
