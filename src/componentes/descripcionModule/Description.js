import React, { useEffect, useState } from "react";
import { envAPI } from "../../ApiCalls";
import styled from "./description.module.css";

const Description = () => {
  const [Pokemon, setPokemon] = useState(null);
  const name = "pikachu";
  const response = async (page) => envAPI(page);
  async function obtenerPokemon() {
    const resp = await response(`pokemon/${name}`);
    setPokemon(resp?.data);
    //console.log(resp?.data);
  }

  useEffect(() => {
    obtenerPokemon();
    return function cleanup() {
      obtenerPokemon();
    };
  }, [name]);
  console.log(Pokemon);
  return (
    <div className={`${styled.containerDiv}`}>
      <div className={`${styled.borde}`}></div>
      <div className={`${styled.borde} ${styled.DivPicture}`}>
        <p className={`${styled.Pname}`}>{Pokemon?.name}</p>
        <img
          className={`${styled.imgPokemon}`}
          src={Pokemon?.sprites?.other?.home?.front_default}
        />
      </div>
      <div className={`${styled.borde}`}></div>
    </div>
  );
};

export default Description;
