// Importaciones necesarias
import React from "react";
import Login from "./pages/Login";
import Resgister from "./pages/Resgister";
import HomeScreeen from "./pages/HomeScreeen";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProteteRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./pages/Description";
import NavBard from "./components/NavBard";

const App = () => {
  return (
    <BrowserRouter>
      <NavBard />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <HomeScreeen />{" "}
            </ProtectedRoute>
          }
        />
        <Route path="/resgistro" element={<Resgister />} />
        <Route path="/Description/:id" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
