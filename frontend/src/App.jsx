import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard"; 
import Home from "./components/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
