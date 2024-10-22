import React from "react";
import { Card, CardFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetalleHabitacion from "../DetalleHabitacion.jsx";
import { galeriaIMG1 } from "../../assets/imagenes.js";

const CardHabitacion = () => {
    // (habitacion)
  return (
    <div className="m-2">
      <Card className="d-flex flex-md-row flex-column">
        <div>
        <img className="col-12 rounded-top-2" src={galeriaIMG1} 
        // habitacion.imagen
        />
        </div>
        <Card.Body className="col-12">
          <Card.Title>Habitacion Individual</Card.Title>
          {/* habitacion.tipoHabitacion */}
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel
            perferendis, eligendi aut maiores praesentium fuga omnis quod
          {/* habitacion.dercripcion_breve */}
          </Card.Text>
          <div><b>$100</b>
          {/* habitacion.precio */}
          </div>
        </Card.Body>
        <CardFooter className="d-flex align-content-md-end flex-md-wrap justify-content-end">
            <div >
                <Link to={`./DetalleHabitacion/`}
                // ${habitacion._id}
                className="btn btn-dark text-white">
                    Ver detalles
                </Link>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardHabitacion;
