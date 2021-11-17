import { Link } from "react-router-dom";

function Cabecera() {
  return (
    <header>
      <h1>Galería de imagenes de perros y gatos</h1>
      <ul>
        <li>
          <Link to="/gatos">Gatos</Link>
        </li>
        <li>
          <Link to="/perros">Perros</Link>
        </li>
      </ul>
    </header>
  );
}

export default Cabecera;
