import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoBody from "./LogoBody";
import ButtonPlay from "./ButtonPlay";
import wirra from "../img-fondo/wirra.jpg";
import birrahouse from "../img-fondo/birrahouse.jpg";
import elfaro from "../img-fondo/elfaro.jpg";
import pecados from "../img-fondo/pecados.jpg";
import elbarcito from "../img-fondo/elbarcito.jpg";
import laboriqua from "../img-fondo/la boriqua.jpg";
import kahlo from "../img-fondo/kahlo.jpg";
import EnvioForm from "./FormSubmit.jsx";
// import BoardContact from "./BoardCo.jsx";
import artemisa from "../img-fondo/artemisa.jpg";
import TextBody from "./TextBody.jsx";

function BackGround(props) {

  if (props.fondo==="color"){
    return(
      <div className="bgTres"> 
        <EnvioForm /> 
        
        {/* <BoardContact/>   */}
        
      </div>
    );
  }
  if (props.fondo==="empresas") {
    return (
      <div className="bgUno">

        <div className="contentCorp">
          <img src={kahlo} alt="Logo Kahlo Disco Lavalle, Mendoza" />
        </div>

        <div className="contentCorp">
          <img src={wirra} alt="Logo de wirra" />
        </div>

        <div className="contentCorp">
          <img src={birrahouse} alt="Logo de birra house" />
        </div>

        <div className="contentCorp">
          <img src={elfaro} alt="Logo de El Faro Cerbeceria" />
        </div>

        <div className="contentCorp">
          <img src={artemisa} alt="Logo La Boriqua sunset" />
        </div>

        <div className="contentCorp">
          <img src={pecados} alt="Logo de Pecados Town Club" />
        </div>

        <div className="contentCorp">
          <img src={elbarcito} alt="Logo El Barcito Disco" />
        </div>

        <div className="contentCorp">
          <img src={laboriqua} alt="Logo La Boriqua sunset" />
        </div>

      </div>
    );
  } else {
    const fondo = props.fondo;
    const logoType = props.logoType;
    const title = props.title;
    const value = props.val;

    return props.logoIn ? (
      <div className="bg" style={{ backgroundImage: `url(${fondo})` }}>
        <TextBody value={value}/>
        <LogoBody logoType={logoType} />
        <ButtonPlay title={title}/>
      </div>
    ) : (
      <div className="bg" style={{ backgroundImage: `url(${fondo})` }}>
        <TextBody value={value}/>
      </div>
    );
  }
}

export default BackGround;
