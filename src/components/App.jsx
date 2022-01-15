import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "../pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";

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
