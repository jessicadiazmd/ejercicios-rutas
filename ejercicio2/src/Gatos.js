function Gatos(props) {
  const mostrarGatos = props.gatos.map(function (gato) {
    return (
      <img
        style={{ width: "90%", alignItems: "center" }}
        src={gato}
        alt="imagen_gato"
      />
    );
  });

  return mostrarGatos;
}

export default Gatos;
