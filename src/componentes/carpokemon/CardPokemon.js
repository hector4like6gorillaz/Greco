import React, { useEffect, useState } from "react";
import { envAPI } from "../../ApiCalls";
import styled from "./card.module.css";

export const CardPokemon = ({ name }) => {
  const [Pokemon, setPokemon] = useState(null);
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

  const obtenerColorDelTipo = (tipo) => {
    switch (tipo) {
      case "poison":
        return styled.backPoison;
      case "bug":
        return styled.backBug;
      case "electric":
        return styled.backElectrico;
      default:
        return styled.backDefecto;
    }
  };

  return (
    <div
      className={`${styled.bordeDeCarta} ${obtenerColorDelTipo(
        Pokemon?.types[0]?.type?.name
      )}`}
    >
      <div className={`${styled.CardContainer}`}>
        <p className={`${styled.PName}`}>
          {Pokemon?.id}.-{name}
        </p>
        <img
          className={`${styled.ImgPokemon}`}
          src={Pokemon?.sprites?.other?.home?.front_default}
        />

        <div className={`${styled.typos}`}>
          {Pokemon !== null &&
            Pokemon?.types?.map((item, index) => {
              return (
                <p
                  className={`${styled.Ptypo} ${obtenerColorDelTipo(
                    item.type.name
                  )}`}
                  key={index}
                >
                  {item.type.name}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};
