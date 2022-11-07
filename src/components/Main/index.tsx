import Cabecalho from '../Cabecalho'
import style from './Main.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carrossel from '../Carousel';


export default function Main() {
  return (
    <>
     <Cabecalho/>
     <Carrossel/>   
   </>
        );
  
}
