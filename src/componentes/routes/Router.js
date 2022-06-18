import { Routes, Route } from "react-router-dom";
import Description from "../descripcionModule/Description";
import App from "../cartasModule/App";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App/> } />
      <Route path="carta/:name" element={<Description />} />
    </Routes>
  );
};

export default Router;
