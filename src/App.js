import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import RegistroPage from "./pages/Registro/RegistroPage";
import LoginPage from "./pages/Login/LoginPage";
import Inicio from "./pages/Inicio/Inicio";

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="pages/Login/Login" element={<LoginPage />} />
        <Route path="pages/Registro/Registro" element={<RegistroPage />} />
        <Route path="pages/Inicio/Inicio" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default App;
