import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import DetallesUsuarios from "./DetallesUsuarios";
import { Link } from "react-router-dom";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=5&noinfo")
      .then((response) => setUsuarios(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUsuarioClick = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };

  const handleVolverClick = () => {
    setUsuarioSeleccionado(null);
  };

  return (
    <div>
      {usuarioSeleccionado ? (
        <DetallesUsuarios
          usuario={usuarioSeleccionado}
          onVolverClick={handleVolverClick}
        />
      ) : (
        <div className="lista-container">
          <Link className="back-button" to="/">
            Volver
          </Link>
          <div style={{ marginTop: "-1em", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.3em" }}>Lista de Usuarios</h2>
          </div>
          <div className="lista-cards-container">
            {usuarios.map((usuario) => (
              <Cards
                key={usuario.login.uuid}
                usuario={usuario}
                onClick={() => handleUsuarioClick(usuario)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaUsuarios;
