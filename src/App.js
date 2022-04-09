import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import React, { useState } from "react";
import BlogDetail from "./Pages/BlogDetail";
import Login from "./Pages/Login.js";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateBlog from "./Pages/CreateBlog";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function darkModeSet() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    return true;
  }
  return (
    <>
      <div className="main">
        <Header darkMode={darkMode} darkToggle={darkModeSet} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/newblog" element={<CreateBlog darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
