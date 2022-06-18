import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { envAPI } from "../../ApiCalls";
import styled from "./pokedex.module.css";

const PokedexModule = () => {
  const { id } = useParams();
  const [next, setNext] = useState(parseInt(id));

  const [Pokemon, setPokemon] = useState(null);

  const response = async (page) => envAPI(page);
  async function obtenerPokemon() {
    const resp = await response(`pokemon/${id}`);
    setPokemon(resp?.data);
    console.log(resp?.data);
  }

  const nextPokemon = async (dat) => {
    const resp = await response(`pokemon/${dat}`);
    setPokemon(resp?.data);
    console.log(resp?.data);
  };
  const handleNext = () => {
    setNext(next + 1);
  };

  useEffect(() => {
    obtenerPokemon();
    return function cleanup() {
      obtenerPokemon();
    };
  }, [id]);

  useEffect(() => {
    nextPokemon(next);
  }, [next]);

  return (
    <div>
      <div className={`${styled.pokedexContainer}`}>
        <div className={`${styled.header}`}>
          <div className={`${styled.exterior} ${styled.rounded}`}>
            <div className={`${styled.interior} ${styled.rounded}`}>
              <div className={`${styled.brillo} ${styled.rounded}`}></div>
            </div>
          </div>
        </div>
        <div className={` ${styled.cuerpo}`}>
          <div className={`${styled.imagenPoke}`}>
            <img
              className={`${styled.imgPokemon}`}
              src={Pokemon?.sprites?.other?.home?.front_default}
            />
          </div>
          <div className={`${styled.seccionBotones}`}>
            <div className={``}></div>
            <div className={` ${styled.cruceta}`}>
              <div className={``}></div>
              <div
                className={` ${styled.backgroundBlack} ${styled.bordesArriba}`}
              ></div>
              <div className={``}></div>
              <div
                className={` ${styled.backgroundBlack} ${styled.bordesIzq}`}
              ></div>
              <div className={` ${styled.backgroundBlack}`}></div>
              <div
                onClick={() => handleNext()}
                className={` ${styled.backgroundBlack} ${styled.bordesDer}`}
              ></div>
              <div className={``}></div>
              <div
                className={` ${styled.backgroundBlack} ${styled.bordesAbajo}`}
              ></div>
              <div className={``}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexModule;
