import React from "react";
import { Card } from "react-bootstrap";

const Contacto = () => {
  return (
    <div className="backQS flex-grow-1 d-flex flex-column justify-content-evenly align-content-center">
      <h1 className="text-center my-3">Por si quieres contactarnos:</h1>
      <section className="container d-flex flex-wrap justify-content-around flex-column flex-md-row align-items-center">
        <Card className="my-3 col-12 col-sm-5 backQ text-center">
          <Card.Title>Gabriel Alejandro Haurane</Card.Title>
          <Card.Body>
            <a href="https://www.linkedin.com/in/gabriel-haurane-b117a627b/"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                className="bi bi-linkedin" 
                style={{ fontSize: "2rem", color: "#0077b5" }}
              ></i>
            </a>
            <a className="ms-3" href="https://github.com/GabrielHaurane"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                className="bi bi-github" 
                style={{ fontSize: "2rem", color: "black" }}
              ></i>
            </a>
            <a className="ms-3" href="mailto:gabrielhaurane@gmail.com?subject=Hola&body=Escribe%20tu%20mensaje%20aquí"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                className="bi bi-envelope-fill" 
                style={{ fontSize: "2rem", color: "#EA4335" }}
              ></i>
             </a>
          </Card.Body>
        </Card>
        <Card className="col-12 col-sm-5 my-3 backQ text-center">
          <Card.Title>Augusto Patricio Brito</Card.Title>
          <Card.Body>
            <a href="https://www.linkedin.com/in/augusto-brito-399a05334/"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                className="bi bi-linkedin" 
                style={{ fontSize: "2rem", color: "#0077b5" }}
              ></i>
            </a>
            <a className="ms-3" href="https://github.com/BritoAugusto"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                className="bi bi-github" 
                style={{ fontSize: "2rem", color: "black" }}
              ></i>
            </a>
            <a className="ms-3" href="mailto:britoaugusto1@gmail.com?subject=Hola&body=Escribe%20tu%20mensaje%20aquí"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                className="bi bi-envelope-fill" 
                style={{ fontSize: "2rem", color: "#EA4335" }}
              ></i>
            </a>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Contacto;