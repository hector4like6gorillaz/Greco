import React from "react";
import styled from "./ejemplo.module.css";

const App = () => {
  const MyName = "hector balan";
  const poema =
    " alkjshdjkalsdklasdklajsdlkajdkl aklsjd alksjdalksd lkad alk daklj alksd alkd jlka dlakdjalks jla lakdj lkajd alkd lka djlkad lakdj lkajdkladkj alk ajdlka jdlak djalkd alkd alkj alkdjal dalkdj lakdjal kdakdlajd lkadj alkjshdjkalsdklasdklajsdlkajdkl aklsjd alksjdalksd lkad alk daklj alksd alkd jlka dlakdjalks jla lakdj lkajd alkd lka djlkad lakdj lkajdkladkj alk ajdlka jdlak djalkd alkd alkj alkdjal dalkdj lakdjal kdakdlajd lkadj alkjshdjkalsdklasdklajsdlkajdkl aklsjd alksjdalksd lkad alk daklj alksd alkd jlka dlakdjalks jla lakdj lkajd alkd lka djlkad lakdj lkajdkladkj alk ajdlka jdlak djalkd alkd alkj alkdjal dalkdj lakdjal kdakdlajd lkadj alkjshdjkalsdklasdklajsdlkajdkl aklsjd alksjdalksd lkad alk daklj alksd alkd jlka dlakdjalks jla lakdj lkajd alkd lka djlkad lakdj lkajdkladkj alk ajdlka jdlak djalkd alkd alkj alkdjal dalkdj lakdjal kdakdlajd lkadj alkjshdjkalsdklasdklajsdlkajdkl aklsjd alksjdalksd lkad alk daklj alksd alkd jlka dlakdjalks jla lakdj lkajd alkd lka djlkad lakdj lkajdkladkj alk ajdlka jdlak djalkd alkd alkj alkdjal dalkdj lakdjal kdakdlajd lkadj";
  const Saludo = (name) => {
    console.log("hola", name, "como estas?");
  };

  return (
    <>
      <header className={`${styled.HeaderInicial}    `}>
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
        <p className={` ${styled.NombreUsuario}   ${styled.bordes}`}>
          {MyName}
        </p>
        <div className={`${styled.avatar}`}>HB</div>
      </header>
      <div className={`${styled.bordes}`}>
        <h1>Oda a la programacion</h1>
        <p>{poema}</p>
        <button onClick={() => Saludo(MyName)}>saludo</button>
      </div>
    </>
  );
};

export default App;
