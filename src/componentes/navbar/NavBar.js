import React from "react";
import styled from "./navbar.module.css";
import lupa from "../../assets/lupa.png";

const NavBar = (props) => {
  return (
    <div className={`${styled.containerNavBar}`}>
      <div className={`${styled.BarraDeBusqueda}`}>
        <input
          value={props.buscador}
          onChange={(e) => {
            props.set(e.target.value);
          }}
          className={`${styled.buscador}`}
          type={"text"}
        />
        <img className={`${styled.ImgSearch}`} src={lupa} />
      </div>
    </div>
  );
};

export default NavBar;
