function Jugador(props) {
  return (
    <div>
      <h1>{props.jugador.nombre}</h1>
      <p>Edad:{props.jugador.edad}</p>
      <p>Posición:{props.jugador.pos}</p>
      <p>Estatura:{props.jugador.estatura}</p>
    </div>
  );
}

export default Jugador;
