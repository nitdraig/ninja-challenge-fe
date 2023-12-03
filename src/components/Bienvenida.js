import React from "react";
import { Link } from "react-router-dom";
import imageLogo from "../sources/NinjaTalent.png";

export const Bienvenida = () => {
  return (
    <header className="welcome">
      <h1>Bienvenido al Front-End challenge</h1>
      <div>
        <img className="welcome-logo" src={imageLogo} />
      </div>
      <p style={{ color: "#fff" }}>Para empezar clickea aquí 👇🏻</p>
      <div className="welcome-button-container">
        <Link className="welcome-button" to="/listaUsuario">
          Empezar
        </Link>
      </div>
    </header>
  );
};
