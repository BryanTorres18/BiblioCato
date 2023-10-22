import "../styles/Footer.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
function Footer(){
    return(
        <footer className="Footer-Inicio">
            <div className="Contenedor-Footer">
                <div className="footer-contenido">
                    <h5 className="titulo-contenido">
                        Universidad
                    </h5>
                    <a className="texto-contenido">Inicio</a><br></br>
                    <a className="texto-contenido">Admision</a><br></br>
                    <a className="texto-contenido">Pregrado</a><br></br>
                    <a className="texto-contenido">Postgrado</a><br></br>
                    <a className="texto-contenido">Investigacion</a><br></br>
                </div>
                <div className="footer-contenido">
                    <h5 className="titulo-contenido">
                        Contacto
                    </h5>
                    <a className="texto-contenido">Campus Central</a><br></br>
                    <a className="texto-contenido">Urb. San José s/n Umacollo</a><br></br>
                    <a className="texto-contenido">Arequipa - Perú</a><br></br>
                    <FontAwesomeIcon icon={faLocationDot} beat style={{color: "#ffffff",}} /><a className="texto-contenido"> Mapa</a><br></br>
                    <FontAwesomeIcon icon={faPhone} beat style={{color: "#ffffff",}} /><a className="texto-contenido"> 054-382038</a><br></br>
                </div>
                <div className="footer-contenido">
                    <p className="titulo-contenido">
                        Biblioteca
                    </p>
                    <a className="texto-contenido">Normas</a><br></br>
                    <a className="texto-contenido">Guias</a><br></br>
                    <a className="texto-contenido">Mapa del Sitio</a><br></br>
                </div>
                <div className="footer-contenido">
                    <h5 className="titulo-contenido">
                        Ayuda
                    </h5>
                    <a className="texto-contenido">Soporte</a><br></br>
                </div>
            </div>
            <p className="footerCopyrightText">© 2023 Universidad Católica de Santa María - Todos los derechos reservados</p>
        </footer>
    );
}

export default Footer;