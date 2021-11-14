import { Link } from "react-router-dom";

function Pelicula(props) {
  return (
    <div style={{ width: "30%" }} id={props.key}>
      <h1>{props.peliculas.titulo}</h1>
      <img
        style={{ width: "250px" }}
        src={props.peliculas.cartel}
        alt={props.peliculas.titulo}
      />
    </div>
  );
}

export default Pelicula;
