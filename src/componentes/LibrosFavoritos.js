import "../styles/LibrosFavoritos.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

//

function LibrosFavoritos() {
    const [libros, setLibros] = useState([
        {
            id: 1,
            nombre: 'Libro 1',
            favorito: true,
            editorial: 'Editorial A',
        },
        {
            id: 2,
            nombre: 'Libro 2',
            favorito: true,
            editorial: 'Editorial B',
        },
        {
            id: 3,
            nombre: 'Libro 3',
            favorito: true,
            editorial: 'Editorial C',
        },
    ]);

    // Para que todos los libros tengan la propiedad favorito
    useEffect(() => {
        const updatedLibros = libros.map((libro) => ({
            ...libro,
            favorito: libro.favorito || false,
        }));
        setLibros(updatedLibros);
    }, []);

    // Para cambiar el estado de favorito de un libro
    const handleToggleFavorito = (id) => {
        setLibros((prevLibros) => {
            return prevLibros.map((libro) => {
                if (libro.id === id) {
                    return { ...libro, favorito: !libro.favorito };
                }
                return libro;
            });
        });
    };

    const handleDescargar = (id) => {
        console.log(`Descargando libro con ID ${id}`);
        window.alert(`Descargando "${libros[id - 1].nombre}"`);
    };

    return (
        <div className="contenedor-libros">
            <table className="tabla-libros">
                <thead>
                    <tr>
                        <th>Nombre del Libro</th>
                        <th className="titulo-favorito">Favorito</th>
                        <th className="titulo-descargar">Descargar</th>
                        <th>Editorial</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro) => (
                        <tr key={libro.id}>
                            <td className="nombre-libro">{libro.nombre}</td>
                            <td className={`favorito-icon ${libro.favorito ? 'favorito' : ''}`}>
                                <FontAwesomeIcon
                                    icon={libro.favorito ? solidHeart : regularHeart}
                                    onClick={() => handleToggleFavorito(libro.id)}
                                    className="icon"
                                />
                            </td>
                            <td className="descargar-icon">
                                <FontAwesomeIcon
                                    icon={faDownload}
                                    onClick={() => handleDescargar(libro.id, libro.nombre)}
                                    style={{ cursor: 'pointer' }}
                                    className="icon"
                                />
                            </td>
                            <td className="editorial">{libro.editorial}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LibrosFavoritos;