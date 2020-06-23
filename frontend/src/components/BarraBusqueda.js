import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const BarraBusqueda = () => {
  return (
    <Form>
      <Row>
        <Col xs={10}>
          <Form.Control type="text" placeholder="Ingrese un ID"></Form.Control>
        </Col>
        <Col xs={2} className="px-0 text-center">
          <Button variant="dark">Buscar</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BarraBusqueda;
