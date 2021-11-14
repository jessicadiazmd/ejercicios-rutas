import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cabecera from "./Cabecera.js";
import Jugador from "./Jugador.js";
import Equipo from "./Equipo.js";

function App() {
  let [jugadores, setJugadores] = useState([
    {
      nombre: "Jugador 1",
      pos: "Base",
      edad: "34",
      estatura: "2,00 m",
    },
    {
      nombre: "Jugador 2",
      pos: "Pivot",
      edad: "30",
      estatura: "1,89 m",
    },
    {
      nombre: "Jugador 3",
      pos: "Escolta",
      edad: "28",
      estatura: "1,92 m",
    },
    {
      nombre: "Jugador 4",
      pos: "Alero",
      edad: "27",
      estatura: "1,98 m",
    },
    {
      nombre: "Jugador 5",
      pos: "Ala-pivot",
      edad: "30",
      estatura: "2,02 m",
    },
  ]);

  return (
    <BrowserRouter>
      <Cabecera jugadores={jugadores} />

      <Routes>
        <Route path="/equipo" element={<Equipo equipo={jugadores} />} />
        <Route path="/jugador1" element={<Jugador jugador={jugadores[0]} />} />
        <Route path="/jugador2" element={<Jugador jugador={jugadores[1]} />} />
        <Route path="/jugador3" element={<Jugador jugador={jugadores[2]} />} />
        <Route path="/jugador4" element={<Jugador jugador={jugadores[3]} />} />
        <Route path="/jugador5" element={<Jugador jugador={jugadores[4]} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
