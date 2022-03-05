import React from "react";
import styled from "./ejemplo.module.css";

const App = () => {
  return (
    <header className={`${styled.HeaderInicial}    `}>
      <div>
        <button className={`${styled.BuscarSearchHead}`}>buscar</button>
      </div>
      <div className={`${styled.bordes}`}>
        <input placeholder="ingrese" />
      </div>
      <div>
        <button className={`${styled.otrohHead}`}>buscar</button>
      </div>
      <div>
        <input placeholder="ingrese letra" />
      </div>
      <p className={` ${styled.NombreUsuario}   ${styled.bordes}`}>
        @Hector.Balan
      </p>
    </header>
  );
};

export default App;
