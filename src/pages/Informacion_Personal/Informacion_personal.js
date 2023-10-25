import React, { useEffect } from "react";
import LayoutInicio from "../../componentes/LayoutInicio";
import Footer from "../../componentes/Footer";
import MenuUsuario from "../../componentes/menuUsuario"
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
      <MenuUsuario />
      <Footer />
    </div>
  )
}

export default Informacion_Personal;
