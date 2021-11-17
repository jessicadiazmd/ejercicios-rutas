function Nombres() {
  let nombres = ["Pepe", "Ana", "Juan"];
  let mostrarNombres = nombres.map((nombre) => {
    return <li>{nombre}</li>;
  });

  return <ul>{mostrarNombres}</ul>;
}

export default Nombres;
