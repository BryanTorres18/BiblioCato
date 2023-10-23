import '../../styles/Menu.css';
import React, { useEffect } from 'react';
import LayoutInicio from '../../componentes/LayoutInicio';
import Footer from '../../componentes/Footer';
import LibrosPrestados from '../../componentes/LibrosPrestados';
import LibrosFavoritos from '../../componentes/LibrosFavoritos';


function Inicio(){
  useEffect(() => {
    document.body.classList.add('white-background');
    document.body.classList.remove('image-background');
    return () => {
      document.body.classList.remove('white-background');
      document.body.classList.add('image-background');
    };
  }, []);
      return (
        <div>
          <LayoutInicio />
          <div><LibrosFavoritos /></div>
          
          <Footer />
        </div>
      );
}

export default Inicio;