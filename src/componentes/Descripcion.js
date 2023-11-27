import '../styles/Descripcion.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Descripcion() {
    const book = {
        title: 'Nombre del libro',
        description: 'Lorem ipsum dolor sit amet consectetur...',
        year: '2023',
        type: 'Libro',
        author: 'Autor del libro',
        publisher: 'Editorial del libro',
        ISBN: '01122212'
      };

    return (
        <div className='contenedorLibros'>
            <h1>{book.title}</h1>
            <p className='descripcion'>{book.description}</p>
            <p>Año de publicación: {book.year}</p>
            <p>Tipo de documento: {book.type}</p>
            <p>Autor: {book.author}</p>
            <p>Editorial: {book.publisher}</p>
            <p>ISBN: {book.ISBN}</p>
            <Link to="../pages/Busqueda_Completa/Busqueda">
                    <button className="button-37" role="button">Regresar</button>
                </Link>
        </div>
    );
}

export default Descripcion;