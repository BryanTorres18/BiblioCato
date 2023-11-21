import "../styles/LayoutInicio.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function LayoutInicio() {
  const [userInfo, setUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    try {
      const parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};
      setUserInfo(parsedUserInfo);
    } catch (error) {
      console.error("Error al combinar la información del usuario:", error);
    }
  }, []); 

  const userName = userInfo
    ? `${userInfo.nombres || ''} ${userInfo.apellidoPat || ''} ${userInfo.apellidoMat || ''}`
    : 'Nombre Predeterminado';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <section className="Header-LayoutInicio">
        <div className="logo">
          <img src={require("../imagenes/portada-2.png")} alt="Logo" />
        </div>
        <div className="search-bar">
          <section>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              beat
              style={{ color: "#fcfcfc" }}
            />
          </section>
          <input
            type="text"
            placeholder=" Busqueda por titulo, autor o contenido"
          />
        </div>

        <div className="profile">
          <img src={require("../imagenes/perfil_prueba1.jpg")} id="perfil" />
          <h2>{userName}</h2>
          <div onClick={toggleMenu} className={`icon ${isOpen ? 'active' : ''}`}>
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              style={{ color: "#000000" }}
            />
          </div>
          {isOpen && (
            <ul className={`options ${isOpen ? 'show' : ''}`}>
              <Link to="../pages/Informacion_Personal/Informacion_personal">
                <li>Ajustes</li>
              </Link>
              <Link to="../pages/Login/Login">
                <li>Cerrar Sesion</li>
              </Link>
            </ul>
          )}
        </div>

      </section>
      <nav className="menu">
        <ul>
          <li>
            <Link to="../pages/Inicio/Inicio">Base de Datos</Link>
          </li>
          <li>
            <h1>|</h1>
          </li>
          <li>
            <Link to="../pages/Recomendaciones/Recomendaciones">
              Recomendaciones
            </Link>
          </li>
          <li>
            <h1>|</h1>
          </li>
          <li>
            <Link to="../pages/Informacion_Personal/Libros_Prestados">Prestamos</Link>
          </li>
          <li>
            <h1>|</h1>
          </li>
          <li>
            <Link to="../pages/Novedades/Novedades">Novedades</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LayoutInicio;
