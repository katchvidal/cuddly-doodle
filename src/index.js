import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PrimeraApp from "./components/PrimeraApp";


const rootElement = document.getElementById("root");    //Asiganmos el contenido al Root
const root = createRoot(rootElement);   //  Renderizamos en el Root

root.render(
  <StrictMode>
    <PrimeraApp props={'Enviando Propiedades de Tipo String'} />
  </StrictMode>
);