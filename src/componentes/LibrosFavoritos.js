import "../styles/LibrosFavoritos.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function LibrosFavoritos() {

    const [datosPorDevolver, setDatosPorDevolver] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/librosFavoritos")

            .then((res) => res.json())
            .then((datos) => {
                setDatosPorDevolver(datos);
            });
    } , []);


    return (
        <div className="contenedor">
            <div className="contenedor-seccion">
                <section className="seccion">
                    <br></br>
                    <table>
                        <thead>
                            <tr>
                                <th>Libros Favoritos</th>
                                <th>Descargar</th>
                                <th>Base de Datos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosPorDevolver.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nombreLibro}</td>
                                    <td><Link to={item.linkDescarga}>Descargar</Link></td>
                                    <td>{item.baseDeDatos}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <br></br>
            </div>
        </div>
    );
}

export default LibrosFavoritos;