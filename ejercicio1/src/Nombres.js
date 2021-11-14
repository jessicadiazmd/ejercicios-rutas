import { useState } from "react";

function Nombres() {
  let [nombres, setNombres] = useState(["Pepe", "Ana", "Juan"]);
  let mostrarNombres = nombres.map(function (nombre) {
    return <li>{nombre}</li>;
  });

  return <ul>{mostrarNombres}</ul>;
}

export default Nombres;
