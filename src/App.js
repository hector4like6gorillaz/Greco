import React, { useEffect } from "react";
import style from "./card.module.css";
import { envAPI } from "./ApiCalls";

const App = () => {
  const response = async (page) => envAPI(page);
  async function loadapi() {
    const resp = await response(`pokemon/?offset=0&limit=151`);
    console.log(resp);
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
      <div className={`${style.CardContenedordeCartas}`}></div>
    </div>
  );
};

export default App;
