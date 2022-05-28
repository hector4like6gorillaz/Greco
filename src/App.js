import React, { useState } from "react";
import ComponenteFuncional from "./ComponenteFuncional";
import style from "./card.module.css";
import NavBarMysite from "./NavBarMysite";

const App = () => {
  const [Altura, setAltura] = useState(null);
  const [base, setbase] = useState(null);
  const [ButtonState, setButtonState] = useState(false);
  const [porqueUsestate, setPorqueUsestate] = useState("");
  const MyName = "hector balan";

  const datosApi = [
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    "https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg",
  ];
  const Saludo = (name) => {
    console.log("hola", name, "como estas?");
  };

  const handleErase = () => {
    setButtonState(false);
    setAltura(0);
    setbase(0);
  };

  console.log(porqueUsestate);
  const handleButton = () => {
    setPorqueUsestate(porqueUsestate + "T");
  };
  return (
    <div>
      <NavBarMysite />
      <p>hola como estas</p>
      <p>hola como estas</p>
      <p>hola como estas</p>
      <p>hola como estas</p>
      <p>hola como estas</p>
      <p>hola como estas</p>
      <p>hola como estas</p>
      <p>hola como estas</p>
      <hr />
      <div className={`${style.CardContenedordeCartas}`}>
        {datosApi.map((item, index) => {
          let seMuestra = true;

          return (
            <div key={index}>
              <ComponenteFuncional
                name={item}
                imagen={item}
                atributo={` ${item} ${index * 5} akjshdsakjhdajksd`}
                numero={index}
                show={seMuestra}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
