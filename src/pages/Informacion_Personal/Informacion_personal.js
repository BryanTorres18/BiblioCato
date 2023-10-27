import React, { useEffect } from "react";
import LayoutInicio from "../../componentes/LayoutInicio";
import Footer from "../../componentes/Footer";
import MenuUsuario from "../../componentes/menuUsuario"
import InformacionPersonal from "../../componentes/informacionPersonal";
import "../../styles/Menu.css";

function Informacion_Personal() {
  useEffect(() => {
    document.body.classList.add("white-background");
    document.body.classList.remove("image-background");
    return () => {
      document.body.classList.remove("white-background");
      document.body.classList.add("image-background");
    };
  }, []);
  return (
    <div>
      <LayoutInicio />
      <div className='conteiner2'>
            <div className='conteiner_izq2'>
              <MenuUsuario />
            </div>
            <div className='conteiner_der2'>
              <InformacionPersonal />
            </div>
          </div>
      <Footer />
    </div>
  )
}

export default Informacion_Personal;
