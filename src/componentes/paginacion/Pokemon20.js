import React, { useEffect, useState } from "react";
import { envAPI, URL_ENV } from "../../ApiCalls";
import { CardPokemon } from "../carpokemon/CardPokemon";
import style from "../cartasModule/cartas.module.css";
import styled from "./pokemons20.module.css";

const Pokemon20 = () => {
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [flasheo, setFlasheo] = useState(true);

  const response = async (page) => envAPI(page);

  async function loadapi(endpoint) {
    const resp = await response(endpoint);
    console.log(resp?.data);
    setNext(resp?.data?.next?.replace(URL_ENV, ""));
    if (resp?.data?.previous !== null)
      setPrev(resp?.data?.previous?.replace(URL_ENV, ""));
    else setPrev("");

    //setPokemons([...pokemons, ...resp?.data?.results]);
    setPokemons(resp?.data?.results);

    setFlasheo(true);
  }
  console.log(prev);

  useEffect(() => {
    loadapi("pokemon/?offset=0&limit=20");
    return function cleanup() {
      loadapi("pokemon/?offset=0&limit=20");
    };
  }, []);

  const handleNext = () => {
    setFlasheo(false);
    if (next.length !== 0) loadapi(next);
  };

  const handlePrev = () => {
    setFlasheo(false);
    if (prev.length !== 0) loadapi(prev);
  };

  //useEffect(() => {
  //  setFlasheo(true);
  //}, [data]);

  return (
    <div>
      <div className={`${style.CardContenedordeCartas}`}>
        {flasheo &&
          pokemons.length !== 0 &&
          pokemons.map((item, index) => {
            return (
              <div key={index}>
                <CardPokemon name={item.name} />
              </div>
            );
          })}
      </div>
      <div className={`${styled.divButton}`}>
        {prev !== "" && <button onClick={handlePrev}>20 anteriores</button>}
        <button onClick={handleNext}>Siguientes 20</button>
      </div>
    </div>
  );
};

export default Pokemon20;
