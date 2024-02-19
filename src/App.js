import React from "react";
import "./App.css";
import BackGround from "./Components/Bg.jsx";
import NavBasic from "./Components/NavBasic.jsx"
import Separador from "./Components/Separador.jsx";
import MuroUno from './img-fondo/MuroUno.jpg';
import marco_outfitUno from './img-fondo/marco_outfitUno.jpg'
import imgfiesta2 from './img-fondo/imgfiesta2.jpg'
import marco_parqueUno from './img-fondo/marco_parqueUno.jpg'


function App() {

  return (
    <>
      <NavBasic/>
      <BackGround fondo={MuroUno} logoIn={true} logoType={1} buttonIn={true} title={1}/>
      <Separador title="Service One: BAR && MUSIC HOUSE" id="Bares"/>
      <BackGround fondo={imgfiesta2} logoIn={true} logoType={2} buttonIn={true} title={2}/>
      <Separador title="Service Two: DISCO && DRINKS" id="Noche" />
      <BackGround fondo={marco_outfitUno}/>
      <Separador title="Service Three: DISC ALL NIGHT" id="Boliches" />
      <BackGround fondo={marco_parqueUno}/>
      <Separador title="Companies that trust the service" id="Empresas"/>
      <BackGround/>
    


  </>
  );
}

export default App;
