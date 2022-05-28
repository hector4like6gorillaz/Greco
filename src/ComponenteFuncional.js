import React, { useState } from "react";
import style from "./card.module.css";

const ComponenteFuncional = ({ name, imagen, atributo, numero, show }) => {
  const [variables, setVariables] = useState(0);
  const funcionEjemplo = () => {
    setVariables(variables + 1);
    console.log("boton presionado");
  };
  const disminuir = () => {
    setVariables(variables - 1);
    console.log("boton disminuir");
  };
  return (
    <div className={` ${style.CardContainer} ${!show && style.Ocultar} `}>
      <p>
        {numero} mi nombre es {variables}
      </p>
      <img className={` ${style.PokemonImg} `} src={imagen} />
      <p>{atributo}</p>
      <button className={` ${style.Boton}`} onClick={funcionEjemplo}>
        aumentar variable
      </button>
      <button
        className={`${style.BotonDisminuir} ${style.Boton}`}
        onClick={disminuir}
      >
        disminuir
      </button>
    </div>
  );
};

export default ComponenteFuncional;
