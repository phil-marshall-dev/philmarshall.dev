import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import Layout from "./Layout";
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<div>hi henry</div>}/>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="about" element={<Blog />} /> */}
      </Routes>
  );
}
