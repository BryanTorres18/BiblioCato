import '../styles/ListasLibros.css';
import React from 'react';

function ListasLibros() {
    const librosData = [
        { nombre: 'Libro 1', disponible: 'Sí', descripcion: 'Descripción del Libro 1' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 2', disponible: 'No', descripcion: 'Descripción del Libro 2' },
        { nombre: 'Libro 10', disponible: 'No', descripcion: 'Descripción del Libro 2' },
    ];

    return (
        <div className='contenedorLibros'>
            {librosData.map((libro, index) => (
                <div key={index} className='libro'>
                    <a href={''}>
                        <h2>{libro.nombre}</h2>
                    </a>
                    <h3>Disponible: {libro.disponible}</h3>
                    <p>{libro.descripcion}</p>
                </div>
            ))}
        </div>
    );
}

export default ListasLibros;