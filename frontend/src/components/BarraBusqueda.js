import React, { useState, Fragment } from "react";
import Error from './Error';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BarraBusqueda = ({ setDatos, setCargando, setCuit }) => {
  //Estado de valor a buscar
  const [id, setId] = useState("");
  //Estado de error
  const [error, setError] = useState(false)

  let url = "http://localhost:5000/";

  //Obtener valor ingresado
  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEnviarConsulta = (e) => {
    e.preventDefault();

    setDatos(null);

    if(id.length<1){
      setError(true);
      return;
    }

    //mostrar spinner
    setCargando(true);
    //vaciar busqueda anterior
    setDatos(null);
    //realiza la consulta por si existe o no el cuit
    try {
      fetch(url + "get-cuit/" + id)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            let cuit = data.data.cuit;
            setCuit(cuit);
            //Si existe el cuit, realizar la peticion de los datos
            try {
              fetch(url + "get-info/" + cuit)
                .then((response) => response.json())
                .then((data) => {
                  //enviar los datos para mostrar
                  setDatos(data.data);
                });
            } catch (e) {
             alert('Error al realizar la petición');
            }
          } else if (!data.success) {
            setDatos(data.message);
          }
        });
    } catch (e) {
      alert('Error al realizar la petición');
    }
    setTimeout(() => {
      setCargando(false);
    }, 3000);
    setError(false);
  };

  return (
    <Fragment>
      {error ? <Error /> : null}
    <Form onSubmit={handleEnviarConsulta}>
      <Row>
        <Col xs={9} className="px-0 ml-0">
          <Form.Control
            type="number"
            placeholder="Ingrese un ID"
            value={id}
            onChange={handleId}
          ></Form.Control>
        </Col>
        <Col xs={3} className="px-0 text-center">
          <input type="submit" value="Buscar" className="btn btn-dark" />
        </Col>
      </Row>
    </Form>
    </Fragment>
  );
};

export default BarraBusqueda;
