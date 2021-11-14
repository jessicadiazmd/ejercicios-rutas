import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Nombres from "./Nombres.js";

function Cabecera() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/nombres">Nombres</Link>
        </li>
      </ul>
    </header>
  );
}

function Titulo() {
  return <h1>Rutas en React</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Titulo />} />
        <Route path="/nombres" element={<Nombres />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
