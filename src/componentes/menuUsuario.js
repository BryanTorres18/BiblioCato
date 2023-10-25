import '../styles/menuUsuario.css';
import React from 'react';

function menuUsuario(){
    return(
        <div className='contenedorMenuUsuario'>
            <div className='contenedorOpcionesMenuUsuario'>
                <div className='opcionesMenuUsuario'>
                    <a className='textoOpciones'>
                        Informacion Personal
                    </a>
                </div>

                <div className='opcionesMenuUsuario'>
                    <a className='textoOpciones'>
                        Libros prestados
                    </a>
                </div>

                <div className='opcionesMenuUsuario'>
                    <a className='textoOpciones'>
                        Mis libros favoritos
                    </a>
                </div>

                <div className='opcionesMenuUsuario'>
                    <a className='textoOpciones'>
                        Carnet de biblioteca
                    </a>
                </div>

                <div className='opcionesMenuUsuario'>
                    <a className='textoOpciones'>
                        Cerrar Sesion
                    </a>
                </div>
            </div>
        </div>
    );
}

export default menuUsuario;