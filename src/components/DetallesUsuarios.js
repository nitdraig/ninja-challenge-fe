import React from "react";

const DetallesUsuario = ({ usuario, onVolverClick }) => {
  const fechaRegistro = new Date(usuario.registered.date);
  const dia = fechaRegistro.getDate();
  const mes = fechaRegistro.getMonth() + 1;
  const anio = fechaRegistro.getFullYear();
  const fechaFormateada = `${dia}/${mes}/${anio}`;
  return (
    <section>
      <button className="back-button" onClick={onVolverClick}>
        Volver a la Lista
      </button>
      <div style={{ marginTop: "-2em", textAlign: "center" }}>
        <h2 style={{ fontSize: "3em", textAlign: "center" }}>
          Detalles del Usuario
        </h2>
        <div style={{ color: "#fff" }}>
          <img
            style={{ width: "20%", borderRadius: "50%" }}
            src={usuario.picture.large}
            alt={`${usuario.name.first} ${usuario.name.last}`}
          />
          <h3
            style={{ fontSize: "2.5em", color: "#fff" }}
          >{`${usuario.name.title}. ${usuario.name.first} ${usuario.name.last}`}</h3>
        </div>
        <div style={{ paddingLeft: "1em" }}>
          <p>Email: {usuario.email}</p>
          <p>
            Ubicación:
            {`${usuario.location.city}, ${usuario.location.state}`}
          </p>
          <p>País: {usuario.location.country}</p>
          <p>Codigo postal:{usuario.location.postcode}</p>

          <p>Nombre de usuario: {usuario.login.username}</p>
          <p>Contraseña: {usuario.login.password}</p>
          <p>Telefono: {usuario.phone}</p>
          <p>Edad: {usuario.dob.age}</p>
          <p>Fecha de registro: {fechaFormateada} </p>
        </div>
      </div>
    </section>
  );
};

export default DetallesUsuario;
