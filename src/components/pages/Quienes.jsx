import React from "react";
import { Card } from "react-bootstrap";
import gabrielH from "../assets/Gabriel_Haurane.jpg";

const Quienes = () => {
  return (
    <div className="flex-grow-1 backQS">
        <div className="container">
      <Card className="backQ my-3 d-flex flex-md-row  flex-column border border-2 border-black">
        <div className="d-flex w-100 justify-content-center align-items-center">
          <img className="col-12 h-75"  src={gabrielH}/>
        </div>
        <Card.Body className="col-12 d-flex flex-row">
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
          <Card.Title>Gabriel Alejandro Haurane</Card.Title>
          <Card.Text>
            <b>Desarrollador</b>
          </Card.Text>
          <Card.Text>
            “Nuestra misión es brindar una estancia única y acogedora, donde
            nuestros huéspedes se sientan como en casa, rodeados de comodidad y
            lujo. Nuestro objetivo es ser el destino preferido para aquellos que
            buscan calidad, tranquilidad y atención personalizada.”
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="backQ my-3 d-flex flex-md-row  flex-column border border-2 border-black">
        <div className="d-flex w-100 justify-content-center align-items-center">
          <img className="col-12 h-75"  src={gabrielH}/>
        </div>
        <Card.Body className="col-12 d-flex flex-row">
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
          <Card.Title>Augusto Patricio Brito</Card.Title>
          <Card.Text>
            <b>Desarrollador</b>
          </Card.Text>
          <Card.Text>
            “Nuestra misión es brindar una estancia única y acogedora, donde
            nuestros huéspedes se sientan como en casa, rodeados de comodidad y
            lujo. Nuestro objetivo es ser el destino preferido para aquellos que
            buscan calidad, tranquilidad y atención personalizada.”
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
        </div>
    </div>
  );
};

export default Quienes;
