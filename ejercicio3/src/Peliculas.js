import { Link } from "react-router-dom";
import Pelicula from "./Pelicula.js";

function Peliculas(props) {
  let mostrarPeliculas = props.peliculas.map((pelicula) => {
    return (
      <div style={{ width: "30%" }}>
        <Link to={"/" + pelicula.titulo}>
          <h1>{pelicula.titulo}</h1>
        </Link>
        <img
          style={{ width: "250px" }}
          src={pelicula.cartel}
          alt={pelicula.titulo}
        />
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {mostrarPeliculas}
    </div>
  );
}

export default Peliculas;
