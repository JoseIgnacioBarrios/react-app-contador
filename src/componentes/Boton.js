import React from "react";

function Boton({texto, esBotondeClic, manejarClic}) {
  return (
    <button
      className={esBotondeClic ? "boton-clic" : "boton-reinicias"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Boton;
