import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectList from "../ProjectList/ProjectList.js";
import Home from "../Home/Home.js";
import NavBar from "../NavBar/NavBar.js";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="../ProjectList/ProjectList.js" element={<ProjectList />} />
      </Routes>
      <ProjectList />
    </BrowserRouter>
  );
}
