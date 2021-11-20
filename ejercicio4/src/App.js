import { BrowserRouter, Routes, Route } from "react-router-dom";

import Jugador from "./Jugador.js";
import Equipo from "./Equipo.js";

function App() {
  let jugadores = [
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
  ];

  const rutas = jugadores.map((jugador, index) => {
    return (
      <Route
        path={"/" + jugador.nombre.replace(/ |[áéíóú]/g, "-")}
        element={
          <Jugador
            key={index}
            full={true}
            nombre={jugador.nombre}
            posicion={jugador.pos}
            edad={jugador.edad}
            estatura={jugador.estatura}
          />
        }
      />
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/equipo" element={<Equipo equipo={jugadores} />} />
        {rutas}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
