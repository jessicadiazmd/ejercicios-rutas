import { Link } from "react-router-dom";

function Cabecera(props) {
  return (
    <ul>
      <li>
        <Link to="/equipo">Equipo</Link>
      </li>
      <li>
        <Link to="/jugador1">{props.jugadores[0].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador2">{props.jugadores[1].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador3">{props.jugadores[2].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador4">{props.jugadores[3].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador5">{props.jugadores[4].nombre}</Link>
      </li>
    </ul>
  );
}

export default Cabecera;
