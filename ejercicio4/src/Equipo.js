import Jugador from "./Jugador";

function Equipo(props) {
  return props.equipo.map((jugador, index) => {
    return (
      <Jugador
        full={false}
        nombre={jugador.nombre}
        index={index}
        posicion={jugador.pos}
      />
    );
  });
}

export default Equipo;
