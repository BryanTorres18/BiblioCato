import '../styles/menuUsuario.css';
import { Link, useLocation } from "react-router-dom";
import React from 'react';

function menuUsuario(){
    return(
        <div className='contenedorMenuUsuario'>
            <div className='contenedorOpcionesMenuUsuario'>
                <div className='opcionesMenuUsuario'>
                    <Link to='../pages/Informacion_Personal/Informacion_Personal' className='textoOpciones'>
                        Información Personal
                    </Link>
                </div>

                <div className='opcionesMenuUsuario'>
                    <Link to='../pages/Informacion_Personal/Libros_Prestados' className='textoOpciones'>
                        Libros prestados
                    </Link>
                </div>

                <div className='opcionesMenuUsuario'>
                    <Link to='../pages/Informacion_Personal/Libros_Favoritos' className='textoOpciones'>
                        Mis libros favoritos
                    </Link>
                </div>

                <div className='opcionesMenuUsuario'>
                    <Link to='../pages/Informacion_Personal/Carnet_Biblioteca' className='textoOpciones'>
                        Carnet de biblioteca
                    </Link>
                </div>

                <div className='opcionesMenuUsuario'>
                    <Link to='../pages/Login/Login' className='textoOpciones'>
                        Cerrar Sesión
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default menuUsuario;