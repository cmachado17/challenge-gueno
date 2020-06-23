import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BarraBusqueda from "./components/BarraBusqueda";
import Resultados from "./components/Resultados";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container bg-secondary py-3 border-redondeado">
        <div className="container ">
          <BarraBusqueda />
          <Resultados />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
