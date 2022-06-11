import React, { useEffect, useState } from "react";
import style from "./cartas.module.css";
import { envAPI } from "../../ApiCalls";
import { CardPokemon } from "../carpokemon/CardPokemon";
import NavBar from "../navbar/NavBar";

const App = () => {
  const [datosPokemon, setDatosPokemon] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [buscador, setBuscador] = useState("");
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

  useEffect(() => {
    if (datosPokemon.length !== 0) {
      setFiltro(datosPokemon);
    }
  }, [datosPokemon]);

  useEffect(() => {
    if (buscador !== "") {
      setFiltro(
        datosPokemon.filter((elemnt) => elemnt?.name.includes(buscador))
      );
    } else setFiltro(datosPokemon);
  }, [buscador]);
  
  
  return (
    <div>
      <NavBar buscador={buscador} set={setBuscador} />
      <div className={`${style.CardContenedordeCartas}`}>
        {filtro.length !== 0 &&
          filtro.map((item, index) => {
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
