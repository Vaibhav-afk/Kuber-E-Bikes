import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </>
  );
}
