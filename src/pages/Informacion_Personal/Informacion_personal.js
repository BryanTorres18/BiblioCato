<<<<<<< HEAD
const Informacion_Personal = () =>{
    return <div>Libros Prestados</div>
    
=======
import React, { useEffect } from "react";
import LayoutInicio from "../../componentes/LayoutInicio";
import Footer from "../../componentes/Footer";
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
      <h1>Informacion_Personal</h1>
      <Footer />
    </div>
  );
>>>>>>> a1a430c938059747fa70116a2349da171a060caf
}

export default Informacion_Personal;
