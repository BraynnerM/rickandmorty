import React from "react";
import {Routes, Route } from "react-router-dom";
import {Episodes} from "../pages/Episodes";
import {MainContent} from "../pages/MainContent";
import {Places} from "../pages/Places";

const AppRoutes = () =>
<Routes>
    <Route path="/" element={<MainContent />}/>
    <Route path="/episodes" element={<Episodes />}/>
    <Route path="/places" element={<Places />}/>
</Routes>

export default AppRoutes;