import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Challenges from "../Dashboard/Challenges";
import Completers from "./Completers";
import Founders from "./Founders";
import Subscribers from "./Subscribers";

const menuItems = [
  {
    name: "Challenges",
    path: "challenges",
    icon: "M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z",
  },
  {
    name: "Completers",
    path: "completers",
    icon: "M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7l2 2 4-4m-5-9v4h4V3h-4Z",
  },
  {
    name: "Founders",
    path: "founders",
    icon: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z",
  },
  {
    name: "Subscribers",
    path: "subscribers",
    icon: "M3.5 5.5l7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z",
  },
];

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 p-4">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/dashboard/${item.path}`} // ✅ Absolute path
                className="flex items-center gap-3 text-gray-700 font-bold p-3 hover:bg-gray-200 rounded"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="p-4 w-full sm:ml-64">
        <Routes>
          <Route path="challenges" element={<Challenges />} />
          <Route path="completers" element={<Completers />} />
          <Route path="founders" element={<Founders />} />
          <Route path="subscribers" element={<Subscribers />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}
