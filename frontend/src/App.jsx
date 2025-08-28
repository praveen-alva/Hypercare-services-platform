import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/userDashboard"; // ✅ Capitalized import

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} /> {/* ✅ Route added */}
        </Routes>
      </div>
    </>
  );
}

export default App;
