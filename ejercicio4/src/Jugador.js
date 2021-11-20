import { Link } from "react-router-dom";

function Jugador(props) {
  if (props.full) {
    return (
      <div key={props.nombre}>
        <h3>Nombre: {props.nombre}</h3>
        <p>Posicion: {props.pos}</p>
        <p>Edad: {props.edad}</p>
        <p>Estatura: {props.estatura}</p>
        <Link to="/equipo">
          <p>Volver al equipo</p>
        </Link>
      </div>
    );
  } else {
    return (
      <div key={props.index}>
        <Link to={"/" + props.nombre.replace(/ |[áéíóú]/g, "-")}>
          <h1>{props.nombre}</h1>
        </Link>
      </div>
    );
  }
}

export default Jugador;
