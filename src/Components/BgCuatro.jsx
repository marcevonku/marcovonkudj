import React from "react";
import wirra from "../img-fondo/wirra.jpg";
import birrahouse from "../img-fondo/birrahouse.jpg";
import elfaro from "../img-fondo/elfaro.jpg";
import pecados from "../img-fondo/pecados.jpg";
import elbarcito from "../img-fondo/elbarcito.jpg";
import laboriqua from "../img-fondo/laboriqua.jpg";
import kahlo from "../img-fondo/kahlo.jpg";

const BackGroundTres = () => {
  return (
    <div
      className="bg"
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "200vh", // 100% del viewport height
        //width: '250vh', // 100% del viewport height
      }}
    >
      <div className="row">
        <div className="col">
          <div className="contentLogo">
            <img
              src={wirra}
              alt="logo wirra bar"
              title="wirra"
            />
          </div>
        </div>

        <div className="col">
          <div className="contentLogo">
            <img
              src={birrahouse}
              alt="birra house bar"
              title="birra house"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="contentLogo">
            <img
              src={elfaro}
              alt="el faro disco"
              title="el faro"
            />
          </div>
        </div>

        <div className="col">
          <div className="contentLogo">
            <img
              src={pecados}
              alt="pecados disco"
              title="Pecados"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="contentLogo">
            <img 
                src={elbarcito} 
                alt="El barcio" 
                title="El barcito
                "/>
          </div>
        </div>

        <div className="col">
          <div className="contentLogo">
            <img 
                src={laboriqua} 
                alt="la boriqua disco" 
                title="La boiqua"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <div className="contentLogo">
            <img 
                src={kahlo} 
                alt="Kahlo disc" 
                title="Kahlo disco"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BackGroundTres;
