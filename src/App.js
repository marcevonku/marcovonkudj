import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackGround from "./Components/Bg.jsx";
import NavBasic from "./Components/NavBasic.jsx"
import Separador from "./Components/Separador.jsx";
import MuroUno from './img-fondo/MuroUno.jpg';
import marco_outfitUno from './img-fondo/marco_outfitUno.jpg';
import imgfiesta2 from './img-fondo/imgfiesta2.jpg';
import marco_parqueUno from './img-fondo/marco_parqueUno.jpg';
import Footer from "./Components/Footer.jsx";
import Carrusel from "./Components/Carrusel";

function App() {

  return (
    <>
      <NavBasic />
      <div className="clearfix"></div>
      <BackGround
        fondo={MuroUno}
        logoIn={true}
        logoType={1}
        buttonIn={true}
        title={1}
        val={1}
      />
      <div className="clearfix"></div>
      <Separador title="Servicio Uno: BAR && MUSIC HOUSE" id="Bares" />
      <div className="clearfix"></div>
      <BackGround
        fondo={imgfiesta2}
        logoIn={true}
        logoType={2}
        buttonIn={true}
        title={2}
        val={2}
      />
      <div className="clearfix"></div>
      <Separador title="Servicio Dos: DISCO && DRINKS" id="Noche" />
      <div className="clearfix"></div>
      <BackGround 
        fondo={marco_outfitUno}
        val={3} />
      <div className="clearfix"></div>
      <Separador title="Servicio Tres: DISC ALL NIGHT" id="Boliches" />
      <div className="clearfix"></div>
      <BackGround 
        fondo={marco_parqueUno}
        val={4} />
      <Separador title="GALERIA DE FOTOS" />
      <div className="clearfix"></div>
      <Carrusel />
      <Separador title="EMPRESAS QUE CONFIAN EL EL SERVICIO" id="Empresas" />
      <div className="clearfix"></div>
      <BackGround fondo={"empresas"} />
      <div className="clearfix"></div>
      <Separador title="  Quieres llevar tu fiesta al próximo nivel...!!!  ***  Envíame un mensaje" />
      <div className="clearfix"></div>
      <BackGround fondo={"color"} />
      <Footer />
    </>
  );
}

export default App;
