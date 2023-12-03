import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaUsuarios from "./components/ListaUsuarios";
import { Bienvenida } from "./components/Bienvenida";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/listaUsuario" element={<ListaUsuarios />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
