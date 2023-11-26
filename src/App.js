import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import RegistroPage from "./pages/Registro/RegistroPage";
import LoginPage from "./pages/Login/LoginPage";
import Inicio from "./pages/Inicio/Inicio";
import Recomendaciones from './pages/Recomendaciones/Recomendaciones';
import Informacion_Personal from './pages/Informacion_Personal/Informacion_personal';
import Novedades from './pages/Novedades/Novedades';
import Libros_Prestados from './pages/Informacion_Personal/Libros_Prestados';
import Libros_Favoritos from './pages/Informacion_Personal/Libros_Favoritos';
import Carnet_Biblioteca from './pages/Informacion_Personal/Carnet_Biblioteca';
import Busqueda from './pages/Busqueda_Completa/Busqueda';
import DescripciónLibro from './pages/Descripcion_Libro/DescripcionLibro';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="pages/Login/Login" element={<LoginPage />} />
        <Route path="pages/Registro/Registro" element={<RegistroPage />} />
        <Route path="pages/Inicio/Inicio" element={<Inicio />} />
        <Route path="pages/Recomendaciones/Recomendaciones" element={<Recomendaciones />} />
        <Route path="pages/Novedades/Novedades" element={<Novedades/>} />
        <Route path="pages/Informacion_Personal/Informacion_personal" element={<Informacion_Personal/>} />
        <Route path="pages/Informacion_Personal/Libros_Prestados" element={<Libros_Prestados/>} />
        <Route path="pages/Informacion_Personal/Libros_Favoritos" element={<Libros_Favoritos/>} />
        <Route path="pages/Informacion_Personal/Carnet_Biblioteca" element={<Carnet_Biblioteca/>} />
        <Route path="pages/Busqueda_Completa/Busqueda" element={<Busqueda/>} />
        <Route path="pages/Descripcion_Libro/DescripcionLibro" element={<DescripciónLibro/>} />
      </Routes>
    </div>
  );
}

export default App;
