import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tournaments from "./pages/Tournaments";
import Matches from "./pages/Matches";
import Leaderboard from "./pages/Leaderboard";
import Results from "./pages/Results";
import Teams from "./pages/Teams";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tournaments" element={<Tournaments />} />

        <Route path="/matches" element={<Matches />} />

        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="/results" element={<Results />} />

        <Route path="/teams" element={<Teams />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
