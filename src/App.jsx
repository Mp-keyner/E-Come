// Importaciones necesarias
import React from "react";
import Login from "./pages/Login";
import Resgister from "./pages/Resgister";
import HomeScreeen from "./pages/HomeScreeen";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProteteRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<ProtectedRoute><HomeScreeen /> </ProtectedRoute>} />
        <Route path="/resgistro" element={<Resgister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
