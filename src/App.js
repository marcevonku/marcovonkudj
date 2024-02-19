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
      <BackGround fondo={MuroUno} logoIn={true} logoType={1} buttonIn={true}/>
      <Separador title="Service One: BAR && MUSIC HOUSE" id="Bares"/>
      <BackGround fondo={marco_outfitUno} logoIn={true} logoType={2} buttonIn={true}/>
      <Separador title="Service Two: DISCO && DRINKS" id="Noche" />
      <BackGround fondo={imgfiesta2}/>
      <Separador title="Service Three: DISC ALL NIGHT" id="Boliches" />
      <BackGround fondo={marco_parqueUno}/>
      <Separador title="Companies that trust the service" id="Empresas"/>
      <BackGround/>
      <Separador title="Companies that trust the service" id="Empresas"/>


  </>
  );
}

export default App;
