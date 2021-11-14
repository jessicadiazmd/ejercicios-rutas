function Equipo(props) {
  let mostrarEquipo = props.equipo.map((jugador) => {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "2%",
          marginTop: "3%",
        }}
      >
        <h1>{jugador.nombre}</h1>
        <h3>{jugador.pos}</h3>
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
      {mostrarEquipo}
    </div>
  );
}

export default Equipo;
