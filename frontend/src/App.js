import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BarraBusqueda from "./components/BarraBusqueda";
import Resultados from "./components/Resultados";
import Spinner from "./components/Spinner";
function App() {

const [datos, setDatos] = useState(null);
const [cargando, setCargando] = useState(false);

const componente = (cargando) ? <Spinner /> :  <Resultados datos={datos}/>
  return (
    <Fragment>
      <Header />
      <div className="container bg-secondary py-3 border-redondeado">
        <div className="container ">
          <BarraBusqueda setDatos={setDatos} setCargando={setCargando}/>
      
        </div>
  
      </div>
      <div className="container p-3">
      {datos &&
          componente
          }
      </div>
    </Fragment>
  );
}

export default App;
