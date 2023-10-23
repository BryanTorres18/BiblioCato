import React, { useEffect } from 'react';
import LayoutInicio from "../../componentes/LayoutInicio";
import Footer from "../../componentes/Footer";
import '../../styles/Menu.css';

function Recomendaciones() {
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
      <h1>Recomendaciones</h1>
      <Footer />
    </div>
  );
}

export default Recomendaciones;