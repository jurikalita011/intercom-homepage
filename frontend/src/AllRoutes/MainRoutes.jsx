import React from "react";
import { Route, Routes } from "react-router-dom";
import { FaqModal } from "../pages/FaqModal";
import { Messages } from "../pages/Messages";
import { Help } from "../pages/Help";
import { News } from "../pages/News";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FaqModal />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/help" element={<Help />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default MainRoutes;
