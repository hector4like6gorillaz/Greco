import { Routes, Route } from "react-router-dom";
import Description from "../descripcionModule/Description";
import App from "../cartasModule/App";
import PokedexModule from "../pokedexModule/PokedexModule";
import Pokemon20 from "../paginacion/Pokemon20";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pagination" element={<Pokemon20 />} />
      <Route path="carta/:name" element={<Description />} />
      <Route path="pokedex/:id" element={<PokedexModule />} />
    </Routes>
  );
};

export default Router;
