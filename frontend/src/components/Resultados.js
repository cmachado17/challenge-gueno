import React from "react";

const Resultados = ({ datos }) => {

  return (
    <div className="mt-5 py-3 bg-white text-center border-redondeado">
      {datos.name ? (
        <>
          <h2>
            {datos.name} {datos.surname}{" "}
          </h2>
          <p>{datos.birthday}</p>
          {datos.scoring.approved ? (
            <p>
              Estado: <span className="bg-success">APROBADO</span>
            </p>
          ) : (
            <p>
              Estado: <span className="bg-danger">RECHAZADO</span>
            </p>
          )}
          <p>20-14726160-9</p>
        </>
      ) : (
        <h2>{datos}</h2>
      )}
    </div>
  );
};

export default Resultados;
