import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BarraBusqueda = ({ setCuit }) => {
  //Estado de valor a buscar
  const [id, setId] = useState("");

  let url = "http://localhost:5000/";

  //Obtener valor ingresado
  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEnviarConsulta = (e) => {
    e.preventDefault();

    //realiza la consulta por si existe o no el cuit
    try {
      fetch(url + "get-cuit/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data.cuit);
          if (data.success) {
            let cuit = data.data.cuit;
            //Si existe el cuit, realizar la peticion de los datos
            try {
              fetch(url + "get-info/" + cuit)
                .then((response) => response.json())
                .then((data) => {
                  setCuit(data);
                });
            } catch (e) {
              console.log(e);
            }
          } else if (!data.success) {
            alert(data.message);
          }
        });
    } catch (e) {
      console.log(e);
    }
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
