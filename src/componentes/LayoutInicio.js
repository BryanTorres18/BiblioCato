import "../styles/LayoutInicio.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function LayoutInicio() {
  return (
    <header>
      <section className="Header-LayoutInicio">
        <div className="logo">
          <img src={require("../imagenes/portada-2.png")} alt="Logo" />
        </div>
        <div className="search-bar">
          <section>
          <FontAwesomeIcon icon={faMagnifyingGlass} beat style={{color: "#fcfcfc",}} />
          </section>
          <input
            type="text" placeholder=" Busqueda por titulo, autor o contenido"
          />
        </div>
        <div className="profile">
        </div>
      </section>
      <nav className="menu">
        <ul>
          <li>
            <Link to="https://www.ucsm.edu.pe">Home</Link>
          </li>
          <li>
            <h1>|</h1>
          </li>
          <li>
            <Link to="../pages/Login/Login">Iniciar Sesión</Link>
          </li>
          <li>
            <h1>|</h1>
          </li>
          <li>
            <Link to="../pages/Registro/Registro">Registrarme</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LayoutInicio;
