import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard"; 
import Home from "./components/Home"
// import Login from "./Login/Login";
// import Signup from "./Signup/Signup";
// import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home/>} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}

      {/* Dashboard Routes */}
      <Route path="/dashboard/*" element={<Dashboard />} />

      {/* 404 Not Found */}
      {/* <Route path="*" element={<NotFound />} /> */}
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
