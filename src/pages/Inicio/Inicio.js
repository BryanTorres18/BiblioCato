import '../../styles/Menu.css';
import React, { useEffect } from 'react';
import LayoutInicio from '../../componentes/LayoutInicio';
import Footer from '../../componentes/Footer';
import Busqueda from '../../componentes/busquedaAvanzada';
import Slider from '../../componentes/Slider';


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
          <div className='conteiner'>
            <div className='conteiner_izq'>
              <Slider/>
            </div>
            <div className='conteiner_der'>
              <Busqueda />
            </div>
          </div>
          <Footer />
        </div>
      );
}

export default Inicio;