import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import RegistroPage from "./pages/Registro/RegistroPage";
import LoginPage from "./pages/Login/LoginPage";
import Inicio from "./pages/Inicio/Inicio";
import Recomendaciones from './pages/Recomendaciones/Recomendaciones';
import Informacion_Personal from './pages/Informacion_Personal/Informacion_personal';
import Novedades from './pages/Novedades/Novedades';
import Prestamos from './pages/Prestamos/Prestamos';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="pages/Login/Login" element={<LoginPage />} />
        <Route path="pages/Registro/Registro" element={<RegistroPage />} />
        <Route path="pages/Inicio/Inicio" element={<Inicio />} />
        <Route path="pages/Recomendaciones/Recomendaciones" element={<Recomendaciones />} />
        <Route path="pages/Prestamos/Prestamos" element={<Prestamos/>} />
        <Route path="pages/Novedades/Novedades" element={<Novedades/>} />
        <Route path="pages/Informacion_Personal/Informacion_personal" element={<Informacion_Personal/>} />
      </Routes>
    </div>
  );
}

export default App;
