import '../styles/BusquedaCompleta.css';
import React from 'react';

function BusquedaCompleta(){
    return(
        <div className='contenedorBusqueda'>
            <h5 className='busquedaTitle'>Busqueda Completa</h5>
            <div className='contenedorMenuBusqueda'>
                <div className='divisorMenu'>
                    <label className='label' for='palabraClave'>Palabra Clave</label>
                    <input className='inputBusqueda' id='palabraClave'></input>
                </div>
                <div className='divisorMenu'>
                    <label className='label' for='ano'>Año de Publicación</label>
                    <select className='inputBusqueda' id='ano'></select>
                </div>
                <div className='divisorMenu'>
                    <label className='label' for='palabraClave'>Autor</label>
                    <input className='inputBusqueda' id='palabraClave'></input>
                </div>
                <div className='divisorMenu'>
                    <label className='label' for='idioma'>Idioma</label>
                    <select className='inputBusqueda' id='idioma'></select>
                </div>
                <div className='divisorMenu'>
                    <label className='label' for='departamento'>Departamento</label>
                    <select className='inputBusqueda' id='departamento'></select>
                </div>
                <div className='divisorMenu'>
                    <label className='label' for='documento'>Tipo de Documento</label>
                    <select className='inputBusqueda' id='documento'></select>
                </div>
                <div className='boton'>
                    <button class="button-37" role="button">Buscar</button>
                </div>
            </div>
        </div>
    );

}

export default BusquedaCompleta;