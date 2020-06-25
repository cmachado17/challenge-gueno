import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BarraBusqueda from "./components/BarraBusqueda";
import Resultados from "./components/Resultados";

function App() {

const [cuit, setCuit] = useState(null);

  return (
    <Fragment>
      <Header />
      <div className="container bg-secondary py-3 border-redondeado">
        <div className="container ">
          <BarraBusqueda setCuit={setCuit}/>
          {cuit &&
           <Resultados />
          }
         
        </div>
      </div>
    </Fragment>
  );
}

export default App;
