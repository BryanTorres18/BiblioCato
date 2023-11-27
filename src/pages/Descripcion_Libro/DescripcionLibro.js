import React, { useEffect } from "react";
import LayoutInicio from "../../componentes/LayoutInicio";
import Footer from "../../componentes/Footer";
import "../../styles/Menu.css";
import Descripcion from "../../componentes/Descripcion";



function DescripciónLibro() {
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
          <Descripcion/>
        </div>
      <Footer />
    </div>
  )
}

export default DescripciónLibro;