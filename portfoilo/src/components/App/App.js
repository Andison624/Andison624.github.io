import React, { useEffect } from "react";
import { useRef } from "react";
import { useParams, Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectList from "../ProjectList/ProjectList.js";
import Home from "../Home/Home.js";
import NavBar from "../NavBar/NavBar.js";
import About from "../About/About.js";
import ProjectOne from "../Project/ProjectOne.js";
import ProjectTwo from "../Project/ProjectTwo.js";
import ProjectThree from "../Project/ProjectThree.js";
import ProjectFour from "../Project/ProjectFour.js";
import ProjectFive from "../Project/ProjectFive.js";
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
        <Route path="/projectOne" element={<ProjectOne />} />
        <Route path="/projectTwo" element={<ProjectTwo />} />
        <Route path="/projectThree" element={<ProjectThree />} />
        <Route path="/projectFour" element={<ProjectFour />} />
        <Route path="/projectFive" element={<ProjectFive />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
