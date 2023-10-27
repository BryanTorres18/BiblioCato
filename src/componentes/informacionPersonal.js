import '../styles/informacionPersonal.css';
import React from 'react';

function informacionPersonal() {
    return(
    <div className='contenedor' id='contenedorInfoPersonal'>
        <div className='infoCaratula'>
            <img src={require('../imagenes/perfil_prueba1.jpg')} id='perfilImg'></img>
            <div className='caratulaContenedorTitulos'>
                <h2 className='caratulaTitulos' id='caratulaTitulosNombre'>Pepito Perez Castro</h2>
                <h5 className='caratulaTitulos' id='caratulaTitulosRol'>Estudiante de Pregrado</h5>
            </div>
        </div>
        <div className='infoPersonal'>
            <div className='infoPersonalContIzq'>
                <h4 className='infoPersonalBoldText'>Nombres</h4>
                <h5 className='infoPersonalLightText'>Pepito</h5>
                <h4 className='infoPersonalBoldText'>Correo Institucional</h4>
                <h5 className='infoPersonalLightText'>pepito.perez@ucsm.edu.pe</h5>
                <h4 className='infoPersonalBoldText'>Número de contacto</h4>
                <h5 className='infoPersonalLightText'>999456789</h5>
                <h4 className='infoPersonalBoldText'>Escuela Profesional</h4>
                <h5 className='infoPersonalLightText'>Publicidad y Multimedia</h5>
            </div>
            <div className='infoPersonalContDer'>
                <h4 className='infoPersonalBoldText'>Apellidos</h4>
                <h5 className='infoPersonalLightText'>Pérez Castro</h5>
            </div>
        </div>
    </div>
    );
    
}

export default informacionPersonal;