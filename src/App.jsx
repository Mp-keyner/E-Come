// Importaciones necesarias
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Resgister from "./pages/Resgister";
import ProteteRouter from "./components/ProteteRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/resgistro"
          element={
            <ProteteRouter>
              <Resgister />
            </ProteteRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
