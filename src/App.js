import React from "react";
import "./App.css";
import BackGround from "./Components/Bg.jsx";
import BackGroundUno from "./Components/BgUno.jsx"
import BackGroundDos from "./Components/BgDos.jsx"
import NavBasic from "./Components/NavBasic.jsx"
import Separador from "./Components/Separador.jsx";


function App() {

  return (
    <>
      <NavBasic/>
      <BackGround/>
      <Separador titulo="Service One: BAR && MUSIC HOUSE"/>
      <BackGroundUno/>
      <Separador titulo="Service Two: AFTER HOURS && DRINKS" />
      <BackGroundDos/>
      <Separador titulo="Service Two: AFTER HOURS && DRINKS" />
  </>
  );
}

export default App;
