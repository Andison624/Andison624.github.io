import React, { useEffect } from "react";
import { useRef } from "react";
import { useParams, Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectList from "../ProjectList/ProjectList.js";
import Home from "../Home/Home.js";
import NavBar from "../NavBar/NavBar.js";
import About from "../About/About.js";
import Project from "../Project/Project.js";
import Footer from "../Footer/Footer.js";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectList" element={<ProjectList />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
