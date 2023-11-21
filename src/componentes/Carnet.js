import React, { Component,  useState, useEffect } from 'react';
import '../styles/Carnet.css';


function Carnet(){
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
      const storedUserInfo = localStorage.getItem('userInfo');
      try {
      const parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};
      setUserInfo(parsedUserInfo);
      } catch (error) {
      console.error("Error al combinar la información del usuario:", error);
      }
  }, []); 

  const apellidos = userInfo
      ? `${userInfo.apellidoPat || ''} ${userInfo.apellidoMat || ''}`
      : 'Nombre Predeterminado';
  
  const nombreCompleto = userInfo
  ? `${userInfo.nombres || ''} ${userInfo.apellidoPat || ''} ${userInfo.apellidoMat || ''}`
  : 'Nombre Predeterminado';
  
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div className="left">
              <img className="profile-image" src={require("../imagenes/perfil_prueba1.jpg")} alt="perfil"/>
            <p className="title" id="nombreApellidos">
              {nombreCompleto}
            </p>
            <p className="subtitle">Estudiante de Pregrado</p>
          </div>
          <div className="right">
            <div className="university-title">
              <h2>Biblioteca UCSM</h2>
            </div>
            <div className="card-content">
              <p><span className="title">Nombres:</span> <span id="nombre">{userInfo.nombres}</span></p>
              <p><span className="title">Apellidos:</span> <span id="apellidos">{apellidos}</span></p>
              <p><span className="title">Correo Institucional:</span> <span id="correo">{userInfo.correo}</span></p>
              <p><span className="title">Numero de Contacto:</span> <span id="contacto">{userInfo.telefono}</span></p>
              <p><span className="title">Escuela Profesional:</span> <span id="escuela">{userInfo.carrera}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  

export default Carnet;