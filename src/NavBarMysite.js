import React from "react";
import style from "./card.module.css";

const NavBarMysite = () => {
  const lupa =
    "https://media.istockphoto.com/vectors/magnifying-glass-icon-search-find-seek-icon-vector-id1191133340?k=20&m=1191133340&s=170667a&w=0&h=qTUE23lSWqey1oTsQ5usSC1SVCV5sohwNRJNn1Te5vQ=";
  return (
    <div className={` ${style.NavBarra} `}>
      <input className={` ${style.AlturaComponentes}`} />{" "}
      <button>
        <img className={` ${style.AlturaComponentes}`} src={lupa} />
      </button>
    </div>
  );
};

export default NavBarMysite;
