import "../styles/LibrosPrestados.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUserTie, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

function LibrosPrestados() {
    //Tres const para manejar los datos de los libros por devolver, devueltos y reclamos
    const [datosPorDevolver, setPorDevolverDatos] = useState([]);
    const [datosDevueltos, setDevueltosDatos] = useState([]);
    const [datosReclamo, setReclamoDatos] = useState({ libro: '', autor: '', fecha: '', reclamo: '' });

    useEffect(() => {
        // Reemplaza '/api/pordevolver' por la ruta de tu API de Django
        fetch('/api/pordevolver')
            .then((respuesta) => respuesta.json())
            .then((datos) => setPorDevolverDatos(datos));

        fetch('/api/devueltos')
            .then((respuesta) => respuesta.json())
            .then((datos) => setDevueltosDatos(datos));
    }, []);

    const manejarEntrada = (evento) => {
        const { name, value } = evento.target;
        setReclamoDatos({ ...datosReclamo, [name]: value });
    };

    const handleSubmitReclamo = () => {
        //Para enviar el reclamo a Django
        fetch('/api/reclamos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosReclamo),
        })
            .then((response) => {
                if (response.status === 201) {
                    alert('Reclamo enviado correctamente');
                    setReclamoDatos({ libro: '', autor: '', fecha: '', reclamo: '' });
                }
            });
    };


    return (
        <div className="contenedor">
            <div className="contenedor-seccion">
                <section className="seccion">
                    <br></br>
                    <table>
                        <thead>
                            <tr>
                                <th>Por devolver</th>
                                <th>Fecha límite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosPorDevolver.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nombreLibro}</td>
                                    <td>{item.fechaLimite}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <br></br>
                <section className="seccion">

                    <table>
                        <thead>
                            <tr>
                                <th>Libros Devueltos</th>
                                <th>Fecha de entrega</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosDevueltos.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nombreLibro}</td>
                                    <td>{item.fechaEntrega}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="seccion-formulario">
                    <br></br>
                    <h2>Reclamos</h2>
                    <br></br>
                    <form className="formulario">
                        <div className="icono-input">
                            <FontAwesomeIcon icon={faBook} style={{ color: "black" }} />
                            <div className="letra-input">Libro</div>
                            <input type="text" name="libro" value={datosReclamo.libro} onChange={manejarEntrada} />
                        </div>
                        <div className="icono-input">
                            <FontAwesomeIcon icon={faUserTie} style={{ color: "black" }} />
                            <div className="letra-input">Autor</div>
                            <input type="text" name="autor" value={datosReclamo.autor} onChange={manejarEntrada} />
                        </div>
                        <div className="icono-input-fecha">
                            <FontAwesomeIcon icon={faCalendarDays} style={{ color: "black" }} />
                            <div className="letra-input-fecha">Fecha</div>
                            <input type="date" name="fecha" value={datosReclamo.fecha} onChange={manejarEntrada} />
                        </div>
                        <div className="icono-input-reclamo">
                            <FontAwesomeIcon icon={faNoteSticky} style={{ color: "black" }} />
                            <div className="letra-input-reclamo">Reclamo</div>
                            <textarea className="textarea-reclamo"
                                name="reclamo"
                                value={datosReclamo.reclamo}
                                onChange={manejarEntrada}
                                style={{
                                    resize: "both",
                                    overflow: "auto",
                                    width: "75%",
                                    minHeight: "65px",
                                 }}
                            />
                        </div>
                        <br></br>
                        <button type="button" onClick={handleSubmitReclamo}>
                            Enviar Reclamo
                        </button>

                    </form>
                </section>
            </div>
        </div>
    );
}

export default LibrosPrestados;


