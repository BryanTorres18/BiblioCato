import React, { useEffect } from "react";
import LayoutInicio from "../../componentes/LayoutInicio";
import Footer from "../../componentes/Footer";
import "../../styles/Menu.css";
import BusquedaCompleta from "../../componentes/BusquedaCompleta";
import ListasLibros from "../../componentes/ListasLibros";


function Busqueda() {
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
              <BusquedaCompleta/>
            </div>
            <div className='conteiner_der2'>
              <ListasLibros/>
            </div>
          </div>
      <Footer />
    </div>
  )
}

export default Busqueda;