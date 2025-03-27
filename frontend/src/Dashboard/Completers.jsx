import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Completers() {
  const [projects, setProjects] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    fetchCompleters();
  }, []);

  const fetchCompleters = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/completers");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching Completers:", error);
    }
  };

  const toggleVisibility = async (id, visibility) => {
    try {
      await axios.put(`http://localhost:3000/api/completers/${id}`, {
        visibility: !visibility,
      });
      fetchCompleters();
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };

  const openEditModal = (project) => {
    setCurrentProject(project);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setCurrentProject(null);
  };

  const saveChanges = async () => {
    if (!currentProject) return;

    try {
      await axios.put(
        `http://localhost:3000/api/completers/${currentProject._id}`,
        currentProject
      );
      fetchCompleters();
      closeEditModal();
    } catch (error) {
      console.error("Error updating completer:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-700 text-xl">
          Completers Management
        </h3>
        <button
          type="button"
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-[#3f2d6d] ms-2 hover:bg-[#7a56d6] focus:ring-4 focus:outline-none focus:ring-[#7a56d6]"
        >
          Add Completer
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-sm text-gray-700 bg-gray-50">
            <tr>
              <th className="px-6 py-3">S.No</th>
              <th className="px-6 py-3">Project</th>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Position</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Funding</th>
              <th className="px-6 py-3">Profile Picture</th>
              <th className="px-6 py-3">Link</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project._id}
                className="bg-white border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{project.projectName}</td>
                <td className="px-6 py-4">{project.name}</td>
                <td className="px-6 py-4">{project.role}</td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">{project.funding}</td>
                <td className="px-6 py-4">
                  <img
                    src={project.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4">
                  <a
                    href={project.linkedin}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      toggleVisibility(project._id, project.visibility)
                    }
                    className="text-white bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded"
                  >
                    {project.visibility ? "Visible" : "Not Visible"}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openEditModal(project)}
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

      {/* Edit Modal */}
      {editModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Completer</h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={currentProject.projectName}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  projectName: e.target.value,
                })
              }
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={currentProject.name}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, name: e.target.value })
              }
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={currentProject.role}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, role: e.target.value })
              }
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={currentProject.description}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  description: e.target.value,
                })
              }
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={currentProject.funding}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  funding: e.target.value,
                })
              }
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={currentProject.linkedin}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  linkedin: e.target.value,
                })
              }
            />
            <div className="flex justify-end">
              <button
                onClick={closeEditModal}
                className="mr-2 px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="px-4 py-2 bg-blue-600 text-white rounded"
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
