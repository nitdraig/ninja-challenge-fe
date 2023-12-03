import React from "react";

const Cards = ({ usuario, onClick }) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={usuario.picture.thumbnail}
        alt={`${usuario.name.first} ${usuario.name.last}`}
      />
      <h3 className="card-title">
        <span style={{ fontStyle: "italic" }}>{usuario.name.title}.</span>
        {` ${usuario.name.first} ${usuario.name.last}`}
      </h3>
      <div className="card-subtitle">
        <p style={{ fontSize: "17px", color: "black" }}>
          Email:{" "}
          <span style={{ fontStyle: "italic", backgroundColor: "transparent" }}>
            {usuario.email}
          </span>
        </p>
        <p style={{ fontSize: "17px", color: "black" }}>
          Ubicación:
          <span style={{ fontStyle: "italic", backgroundColor: "transparent" }}>
            {`${usuario.location.city}, ${usuario.location.state}, ${usuario.location.country}`}
          </span>
        </p>
        <button className="button-more" onClick={() => onClick(usuario)}>
          Leer más
        </button>
      </div>
    </div>
  );
};

export default Cards;
