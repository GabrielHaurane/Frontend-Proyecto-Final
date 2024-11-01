import React from "react";
import { Card } from "react-bootstrap";
import gabrielH from "../assets/Gabriel_Haurane.jpg";
import augustoB from "../assets/Augusto-Brito.jpg";
const Quienes = () => {
  return (
    <div className="flex-grow-1 backQS ">
      <div className=" d-flex flex-wrap justify-content-around flex-column flex-md-row">
        <Card className="col-12 col-md-5 backQ my-3 d-flex justify-content-center align-items-center flex-lg-row flex-column flex-wrap border border-2 border-black ">
          <div className="d-flex col-6 justify-content-center align-items-center">
            <img className="col-12 h-75" src={gabrielH} />
          </div>
          <Card.Body className="col-12 d-flex flex-row text-center">
            <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
              <Card.Title className="col-12">
                Gabriel Alejandro Haurane
              </Card.Title>
              <Card.Text className="col-6">
                <b>Desarrollador</b>
              </Card.Text>
              <Card.Text className="col-12">
                “Nuestra misión es ofrecer una experiencia de estancia única y
                cálida, donde cada huésped se sienta en un ambiente familiar,
                rodeado de confort y elegancia. Aspiramos a ser la primera
                elección para quienes valoran la calidad, la paz y un servicio
                personalizado.”
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card className="col-12 col-md-5 backQ my-3 d-flex justify-content-center align-items-center flex-lg-row flex-column flex-wrap border border-2 border-black ">
          <div className="d-flex col-6 justify-content-center align-items-center">
            <img className="col-12 h-75" src={augustoB} />
          </div>
          <Card.Body className="col-12 d-flex flex-row text-center">
            <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
              <Card.Title className="col-12">Augusto Patricio Brito</Card.Title>
              <Card.Text className="col-6">
                <b>Desarrollador</b>
              </Card.Text>
              <Card.Text className="col-12">
                “Nuestra misión es brindar una estancia única y acogedora, donde
                nuestros huéspedes se sientan como en casa, rodeados de
                comodidad y lujo. Nuestro objetivo es ser el destino preferido
                para aquellos que buscan calidad, tranquilidad y atención
                personalizada.”
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Quienes;
