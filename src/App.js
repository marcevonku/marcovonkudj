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
      <div className="clearfix"></div>
      <BackGround fondo={MuroUno} logoIn={true} logoType={1} buttonIn={true} title={1}/>
      <div className="clearfix"></div>
      <Separador title="Service One: BAR && MUSIC HOUSE" id="Bares"/>
      <div className="clearfix"></div>
      <BackGround fondo={imgfiesta2} logoIn={true} logoType={2} buttonIn={true} title={2}/>
      <div className="clearfix"></div>
      <Separador title="Service Two: DISCO && DRINKS" id="Noche" />
      <div className="clearfix"></div>
      <BackGround fondo={marco_outfitUno}/>
      <div className="clearfix"></div>
      <Separador title="Service Three: DISC ALL NIGHT" id="Boliches" />
      <div className="clearfix"></div>
      <BackGround fondo={marco_parqueUno}/>
      <div className="clearfix"></div>
      <Separador title="Companies that trust the service" id="Empresas"/>
      <div className="clearfix"></div>
      <BackGround fondo={""}/>
      <div className="clearfix"></div>
    


  </>
  );
}

export default App;
