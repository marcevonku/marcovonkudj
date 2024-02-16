import React from "react";

function Separador(props) {
  // Desestructura el prop "titulo"
  const { title } = props;
  const {id} = props;

  return (
    <>
      <div className="content">
        <div
          className="bg-black border-bottom border-light border-top border-light"
          style={{
            paddingLeft: "3%",
            color: "white",
          }}
        >
          <h3 className="title" id={id}>{title}</h3>
        </div>
      </div>
    </>
  );
}

export default Separador;
