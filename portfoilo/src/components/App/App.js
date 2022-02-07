import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Project from "../Project/Project.js";
import Home from "../Home/Home.js";
import NavBar from "../NavBar/NavBar.js";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Project />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route /> */}
      </Routes>
    </BrowserRouter>
  );
}
