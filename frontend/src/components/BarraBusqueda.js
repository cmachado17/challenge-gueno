import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BarraBusqueda = ({ setDatos, setCargando }) => {
  //Estado de valor a buscar
  const [id, setId] = useState("");

  let url = "http://localhost:5000/";

  //Obtener valor ingresado
  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEnviarConsulta = (e) => {
    e.preventDefault();

    //mostrar spinner
    setCargando(true);
    //vaciar busqueda anterior
    setDatos(null);
    //realiza la consulta por si existe o no el cuit
    try {
      fetch(url + "get-cuit/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            let cuit = data.data.cuit;
            //Si existe el cuit, realizar la peticion de los datos
            try {
              fetch(url + "get-info/" + cuit)
                .then((response) => response.json())
                .then((data) => {
                  //enviar los datos para mostrar
                  setDatos(data.data);
                  //resetear form
                  setId("");
                });
            } catch (e) {
              console.log(e);
            }
          } else if (!data.success) {
            setDatos(data.message);
          }
        });
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setCargando(false);
    }, 3000);
    //alert(id);
  };

  return (
    <Form onSubmit={handleEnviarConsulta}>
      <Row>
        <Col xs={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese un ID"
            value={id}
            onChange={handleId}
          ></Form.Control>
        </Col>
        <Col xs={2} className="px-0 text-center">
          <input type="submit" value="Buscar" className="btn btn-danger" />
        </Col>
      </Row>
    </Form>
  );
};

export default BarraBusqueda;
