import React from "react";
import { Card, CardFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import { galeriaIMG1 } from "../../assets/imagenes.js";

const CardHabitacion = ({ habitacion }) => {
  return (
    <div className="m-2">
      <Card className="d-flex flex-md-row flex-column">
        <div>
          <img className="col-12 rounded-top-2" src={habitacion.imagen || galeriaIMG1} alt={habitacion.tipoHabitacion} />
        </div>
        <Card.Body className="col-12">
          <Card.Title>{habitacion.tipoHabitacion}</Card.Title>
          <Card.Text>
            {habitacion.descripcion_breve}
          </Card.Text>
          <div><b>${habitacion.precio}</b></div>
        </Card.Body>
        <CardFooter className="d-flex align-content-md-end flex-md-wrap justify-content-end">
          <div>
            <Link to={`../DetalleHabitacion/${habitacion._id}`} className="btn btn-dark text-white">
              Ver detalles
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardHabitacion;
