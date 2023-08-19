import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
