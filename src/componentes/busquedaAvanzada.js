import '../styles/busquedaAvanzada.css';
import React from 'react';

function busquedaAvanzada(){
    return(
        <div className='contenedorBusqueda'>
            <h5 className='busquedaTitle'>Busqueda Avanzada</h5>
            <div className='contenedorMenuBusqueda'>
                <div className='divisorMenu'>
                    <label className='label' for='tituloBusqueda'>Titulo de articulo, Palabras clave</label>
                    <input className='inputBusqueda' id='tituloBusqueda'></input>
                </div>
                <div className='divisorMenu'>
                    <label className='label' for='anioPublicacion'>Año de Publicacion</label>
                    <select className='inputBusqueda' id='anioPublicacion'></select>
                </div>
                <div className='divisorMenu'>
                    <label className='label' for='tipoDocumento'>Tipo de Documento</label>
                    <select className='inputBusqueda' id='tipoDocumento'></select>
                </div>
            </div>
        </div>
    );

}

export default busquedaAvanzada;