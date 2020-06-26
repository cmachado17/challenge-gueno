import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";
import "moment/locale/es";
const Resultados = ({ datos, cuit }) => {

  let formateada;
  //formatear fecha
  if (datos.name) {
     formateada = moment(datos.birthday).format("LL");
  }

  return (
    <div className="mt-5 p-3 bg-white text-center border-redondeado">
      {datos.name ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th style={{ width: "25%" }}></th>
              <th className="table-header">
                {datos.name} {datos.surname}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-weight-bold">Fecha de nacimiento</td>
              <td>{formateada}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Scoring</td>
              <td>
                {" "}
                {datos.scoring.approved ? (
                  
                    <span className="estado-aceptado">APROBADO</span>
                 
                ) : (
                 
                    <span className="estado-rechazado">RECHAZADO</span>
                 
                )}
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">CUIT</td>
              <td>{cuit}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <h3>El ID ingresado no existe en el registro</h3>
      )}
    </div>
  );
};

export default Resultados;
