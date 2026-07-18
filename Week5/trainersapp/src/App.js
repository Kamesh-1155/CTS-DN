import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import TrainerList from "./Components/TrainerList";
import TrainerDetails from "./Components/TrainerDetails";
import NotFound from "./Components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">

        <h1 className="text-center mb-4">
          Cognizant Trainers Portal
        </h1>

        <nav className="mb-4">
          <Link to="/" className="btn btn-primary me-2">
            Home
          </Link>

          <Link to="/trainers" className="btn btn-success">
            Trainers
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/trainers" element={<TrainerList />} />

          <Route path="/trainers/:id" element={<TrainerDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;