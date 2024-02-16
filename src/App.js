import React from "react";
import "./App.css";
import BackGround from "./Components/Bg.jsx";
import BackGroundUno from "./Components/BgUno.jsx"
import BackGroundDos from "./Components/BgDos.jsx"
import BackGroundTres from "./Components/BgTres.jsx";
import BackGroundCuatro from "./Components/BgCuatro.jsx"
import NavBasic from "./Components/NavBasic.jsx"
import Separador from "./Components/Separador.jsx";



function App() {

  return (
    <>
      <NavBasic/>
      <BackGround/>
      <Separador title="Service One: BAR && MUSIC HOUSE" id="Bares"/>
      <BackGroundUno/>
      <Separador title="Service Two: DISCO && DRINKS" id="Noche" />
      <BackGroundDos/>
      <Separador title="Service Three: DISC ALL NIGHT" id="Boliches" />
      <BackGroundTres/>
      <Separador title="companies that trust the service"/>
      <BackGroundCuatro/>

  </>
  );
}

export default App;
