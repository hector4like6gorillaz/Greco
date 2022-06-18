import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { envAPI } from "../../ApiCalls";
import styled from "./description.module.css";

const Description = () => {
  const { name } = useParams();

  const [Pokemon, setPokemon] = useState(null);

  const response = async (page) => envAPI(page);
  async function obtenerPokemon() {
    const resp = await response(`pokemon/${name}`);
    setPokemon(resp?.data);
    console.log(resp?.data);
  }

  useEffect(() => {
    obtenerPokemon();
    return function cleanup() {
      obtenerPokemon();
    };
  }, [name]);

  //console.log(Pokemon);
  return (
    <div className={`${styled.containerDiv}`}>
      <div className={`${styled.borde} ${styled.DescriptionPokemon}`}>
        <div>
          <p className={`${styled.PDescriptionSection}`}>ID: {Pokemon?.id}</p>
          <p className={`${styled.PDescriptionSection}`}>
            Altura: {Pokemon?.height}"
          </p>
          <p className={`${styled.PDescriptionSection}`}>
            Peso: {Pokemon?.weight}
          </p>
          <div>
            {Pokemon?.abilities?.map((item, index) => {
              return (
                <p className={`${styled.PDescriptionSection}`} key={index}>
                  {item.ability.name}
                </p>
              );
            })}
          </div>

          <div>
            {Pokemon?.types?.map((item, index) => {
              return (
                <p className={`${styled.PDescriptionSection}`} key={index}>
                  {item.type.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`${styled.borde} ${styled.DivPicture}`}>
        <p className={`${styled.Pname}`}>{Pokemon?.name}</p>
        <img
          className={`${styled.imgPokemon}`}
          src={Pokemon?.sprites?.other?.home?.front_default}
        />
      </div>
      <div className={`${styled.borde} ${styled.DescriptionPokemon}`}>
        <Link to={`/pokedex/${Pokemon?.id}`}>
          <button>Ir a la pokedex {Pokemon?.id}</button>
        </Link>
      </div>
    </div>
  );
};

export default Description;
