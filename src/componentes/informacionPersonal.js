import '../styles/informacionPersonal.css';
import React, { useState, useEffect } from "react";

function InformacionPersonal() {
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

    return(
    <div className='contenedor' id='contenedorInfoPersonal'>
        <div className='infoCaratula'>
            <img src={require('../imagenes/perfil_prueba1.jpg')} id='perfilImg'></img>
            <div className='caratulaContenedorTitulos'>
                <h2 className='caratulaTitulos' id='caratulaTitulosNombre'>{nombreCompleto}</h2>
                <h5 className='caratulaTitulos' id='caratulaTitulosRol'>Estudiante de Pregrado</h5>
            </div>
        </div>
        <div className='infoPersonal'>
            <div className='infoPersonalContIzq'>
                <h4 className='infoPersonalBoldText'>Nombres</h4>
                <h5 className='infoPersonalLightText'>{userInfo.nombres}</h5>
                <h4 className='infoPersonalBoldText'>Correo Institucional</h4>
                <h5 className='infoPersonalLightText'>{userInfo.correo}</h5>
                <h4 className='infoPersonalBoldText'>Número de contacto</h4>
                <h5 className='infoPersonalLightText'>{userInfo.telefono}</h5>
                <h4 className='infoPersonalBoldText'>Escuela Profesional</h4>
                <h5 className='infoPersonalLightText'>{userInfo.carrera}</h5>
            </div>
            <div className='infoPersonalContDer'>
                <h4 className='infoPersonalBoldText'>Apellidos</h4>
                <h5 className='infoPersonalLightText'>{apellidos}</h5>
            </div>
        </div>
    </div>
    );
    
}

export default InformacionPersonal;