import React from "react";
import { Card } from "react-bootstrap";
const Contacto = () => {
  return (
    <div className="backQS flex-grow-1 d-flex flex-column justify-content-around align-content-center">
      <h1 className="text-center">Por si quieres contactarnos:</h1>
      <section className="container d-flex flex-wrap justify-content-around">
        <Card className="col-5 backQ text-center">
          <Card.Title>Gabriel Alejandro Haurane</Card.Title>
          <Card.Body>
            <a href="https://www.linkedin.com/in/gabriel-haurane-b117a627b/"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                class="bi bi-linkedin"
                style={{ fontSize: "2rem", color: "#0077b5" }}
              ></i>
            </a>
            <a className="ms-3" href="https://github.com/GabrielHaurane"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                class="bi bi-github"
                style={{ fontSize: "2rem", color: "black" }}
              ></i>
            </a>
            <a className="ms-3" href="mailto:gabrielhaurane@gmail.com?subject=Hola&body=Escribe%20tu%20mensaje%20aquí"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                class="bi bi-envelope-fill"
                style={{ fontSize: "2rem", color: "#EA4335" }}
              ></i>
             </a>
          </Card.Body>
        </Card>
        <Card className="col-5 backQ text-center">
          <Card.Title>Augusto Patricio Brito</Card.Title>
          <Card.Body>
            <a href="https://www.linkedin.com/in/gabriel-haurane-b117a627b/"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                class="bi bi-linkedin"
                style={{ fontSize: "2rem", color: "#0077b5" }}
              ></i>
            </a>
            <a className="ms-3" href="https://github.com/GabrielHaurane"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                class="bi bi-github"
                style={{ fontSize: "2rem", color: "black" }}
              ></i>
            </a>
            <a className="ms-3" href="mailto:gabrielhaurane@gmail.com?subject=Hola&body=Escribe%20tu%20mensaje%20aquí"
            target="_blank" 
            rel="noopener noreferrer" >
              <i
                class="bi bi-envelope-fill"
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