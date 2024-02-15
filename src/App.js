import React from "react";
import "./App.css";
import BackGround from "./Components/Bg.jsx";
import BackGroundUno from "./Components/BgUno.jsx"
import BackGroundDos from "./Components/BgDos.jsx"
import NavBasic from "./Components/NavBasic.jsx"

function App() {

  return (
    <>
      <NavBasic/>
      <BackGround/>
      <BackGroundUno/>
      <BackGroundDos/>
  </>
  );
}

export default App;
