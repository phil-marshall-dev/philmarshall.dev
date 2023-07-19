import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import Layout from "./Layout";
import {
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
  );
}
