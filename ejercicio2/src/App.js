import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Cabecera from "./Cabecera.js";
import Gatos from "./Gatos.js";
import Perros from "./Perros.js";

function App() {
  const gatos = [
    "https://static.elcorreo.com/www/multimedia/202109/05/media/cortadas/gatos-kbyF-U15043581970470E-984x468@RC.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TZTtDQjHsRMkalcnrGaPLbu6eV1ivyaPtK9KBldh_R31vxX-pQ6SPu1NIoeVWmssGA8&usqp=CAU",
    "https://www.fundacion-affinity.org/sites/default/files/descubre-como-se-comporta-un-gato.jpg?itok=n2kVSTSl",
    "https://www.hogarmania.com/archivos/201505/razas-gatos-2xl-668x400x80xX.jpg",
  ];
  const perros = [
    "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg",
    "https://phantom-expansion.unidadeditorial.es/04d5a7930d32e4860ba7cf82291b9d30/resize/640/assets/multimedia/imagenes/2021/03/18/16160714974849.jpg",
    "https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-a.jpg",
    "https://elcorreoweb.es/binrepository/761x401/52c0/675d400/none/10703/SGOE/eca-cachorros-de-perro_20692860_20210902111624.jpg",
  ];

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/gatos" element={<Gatos gatos={gatos} />} />
        <Route path="/perros" element={<Perros perros={perros} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
