import React, { useEffect, useState } from "react";
import style from "./card.module.css";
import { envAPI } from "./ApiCalls";
import { CardPokemon } from "./CardPokemon";

const App = () => {
  const [datosPokemon, setDatosPokemon] = useState([]);
  const response = async (page) => envAPI(page);
  async function loadapi() {
    const resp = await response(`pokemon/?offset=0&limit=151`);
    setDatosPokemon(resp?.data?.results);
  }

  useEffect(() => {
    loadapi();
    return function cleanup() {
      loadapi();
    };
  }, []);

  return (
    <div>
      <p>Hoy trabajaremos con la api de pokemon</p>
      <div className={`${style.CardContenedordeCartas}`}>
        {datosPokemon.length !== 0 &&
          datosPokemon.map((item, index) => {
            return (
              <div key={index}>
                <CardPokemon name={item.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
