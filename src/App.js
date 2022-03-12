import React, { useState } from "react";
import styled from "./ejemplo.module.css";

const App = () => {
  const [Altura, setAltura] = useState(null);
  const [base, setbase] = useState(null);
  const [ButtonState, setButtonState] = useState(false);

  const MyName = "hector balan";

  const Saludo = (name) => {
    console.log("hola", name, "como estas?");
  };
  const handleErase = () => {
    setButtonState(false);
    setAltura(0);
    setbase(0);
  };
  return (
    <>
      <header id={`idEjemplo`} className={`${styled.HeaderInicial}    `}>
        <div>
          <button className={`${styled.BuscarSearchHead}`}>buscar</button>
        </div>
        <div className={`${styled.bordes}`}>
          <input placeholder="ingrese" />
        </div>
        <div>
          <button className={`${styled.otrohHead}`}>buscar</button>
        </div>
        <div>
          <input placeholder="ingrese letra" />
        </div>
        <p className={` ${styled.NombreUsuario} ${styled.bordes}`}>{MyName}</p>
        <div className={`${styled.avatar}`}>HB</div>
      </header>
      <div className={` ${styled.scroll} ${styled.bordes}`}>
        <h1>Oda a la programacion</h1>
        <p>hola buenos dias</p>
        <label>my nombre</label>
        <input type="number" /> <label>my nombre</label>
        <p>hola buenos dias</p>
        <p>hola buenos dias</p>
        <label>my nombre</label>
        <input type="number" /> <label>my nombre</label>
        <p>hola buenos dias</p>
        <p>hola buenos dias</p>
        <label>my nombre</label>
        <input type="number" /> <label>my nombre</label>
        <p>hola buenos dias</p>
        <p>hola buenos dias</p>
        <label>my nombre</label>
        <input type="number" /> <label>my nombre</label>
        <p>hola buenos dias</p>
        <p>hola buenos dias</p>
        <button onClick={() => Saludo(MyName)}>saludo</button>
      </div>
      <div className={``}>
        <p>
          ingresa la altura y la base del cuadrilatero para determinar su area
        </p>
        <label>ingresa la altura</label>{" "}
        <input
          onChange={(e) => setAltura(e.target.value)}
          value={Altura}
          type={"number"}
        />
        <tr />
        <label>ingresa la base</label>{" "}
        <input
          onChange={(e) => setbase(e.target.value)}
          value={base}
          type={"number"}
        />
        <tr />
        <button onClick={() => setButtonState(true)}>Calcular area</button>
        <button onClick={handleErase}>Borrar</button>
        {ButtonState && <p>el area de tu cuadrilatero es {base * Altura}</p>}
      </div>
    </>
  );
};

export default App;
