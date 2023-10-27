import React, { Component } from 'react';
import '../styles/Carnet.css';

class Carnet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {
        nombre: "Pepito",
        apellidos: "Perez Castro",
        correo: "pepito.perez@ucsm.edu.pe",
        contacto: "920601243",
        escuela: "Publicidad y Multimedia"
      }
    };
  }

  render() {
    const { datos } = this.state;

    return (
      <div className="container">
        <div className="card-container">
          <div className="card">
            <div className="left">
                <img className="profile-image" src={require("../imagenes/perfil_prueba1.jpg")} alt="perfil"/>
              <p className="title" id="nombreApellidos">
                {datos.nombre} {datos.apellidos}
              </p>
              <p className="subtitle">Estudiante de Pregrado</p>
            </div>
            <div className="right">
              <div className="university-title">
                <h2>Biblioteca UCSM</h2>
              </div>
              <div className="card-content">
                <p><span className="title">Nombres:</span> <span id="nombre">{datos.nombre}</span></p>
                <p><span className="title">Apellidos:</span> <span id="apellidos">{datos.apellidos}</span></p>
                <p><span className="title">Correo Institucional:</span> <span id="correo">{datos.correo}</span></p>
                <p><span className="title">Numero de Contacto:</span> <span id="contacto">{datos.contacto}</span></p>
                <p><span className="title">Escuela Profesional:</span> <span id="escuela">{datos.escuela}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carnet;