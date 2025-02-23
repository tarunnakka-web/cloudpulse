import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Resource from "./components/Resource";
import Utilization from "./components/Utilization";
import CostAnalysis from "./components/CostAnalysis";
import Improvement from "./components/Improvement";
import GreenSwitch from "./components/GreenSwitch";
import Settings from "./components/Settings";


export default function App() {
  return (
    <Router>
      
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />   
            <Route path="/resource" element={<Resource />} />
            <Route path="/utilization" element={<Utilization />} />
            <Route path="/costanalysis" element={<CostAnalysis />} />
            <Route path="/improvement" element={<Improvement />} />
            <Route path="/greenswitch" element={<GreenSwitch />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
    </Router>
  );
}
