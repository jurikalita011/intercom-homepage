import React from "react";
import { Route, Routes } from "react-router-dom";
import { Messages } from "../pages/Messages";
import { Help } from "../pages/Help";
import { News } from "../pages/News";
import { Home } from "../pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/help" element={<Help />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default MainRoutes;
