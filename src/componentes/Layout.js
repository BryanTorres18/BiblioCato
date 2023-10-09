import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/Layout.css";

function Layout(){
  const location = useLocation();
    return ( 
    <header className="Header-Layout">
      <img src={require("../imagenes/portada-2.png")}  alt="Logo"/>
        <nav>
            <ul>
                <li>
                  <Link to= "https://www.ucsm.edu.pe" className={location.pathname === "/" ? "select" : ""}>Home</Link>
                </li>
                <li >
                  <h1>|</h1>
                </li>
                <li>
                  <Link to= "../pages/Login/Login" className={location.pathname.startsWith('/pages/Login/Login') ? 'select' : ''}>Iniciar Sesión</Link>
                </li>
                <li>
                  <h1>|</h1>
                </li>
                <li>
                  <Link to= "../pages/Registro/Registro" className={location.pathname.startsWith('/pages/Registro/Registro') ? 'select' : ''}>Registrarme</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </header>
    );
}

export default Layout;