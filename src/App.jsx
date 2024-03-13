// Importaciones necesarias
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Resgister from "./pages/Resgister";
import ProteteRouter from "./components/ProteteRouter";
import HomeScreeen from "./pages/HomeScreeen";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Home"
          element={
            <ProteteRouter>
              <HomeScreeen />
            </ProteteRouter>
          }
        />
        <Route path="/resgistro" element={<Resgister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
