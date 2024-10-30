import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { obtenerHabitacionAdmin } from "../../../helpers/queries.js";
import { useParams } from "react-router-dom";
const CardDetalles = ({habitacion}) => {
  // Estado para las fechas de entrada y salida
  const [fechaEntradaa, setFechaEntradaa] = useState("");
  const [fechaSalidaa, setFechaSalidaa] = useState("");
  const today = new Date().toISOString().split("T")[0];
  



  return (
    <div className="m-2">
      <Card className="d-flex flex-md-row flex-column">
        <div className="d-flex flex-wrap align-content-center">
          <img
            className="col-12 rounded-top-2 "
            src={habitacion.imagen}
            
          />
        </div>
        <Card.Body className="col-12">
          <Card.Title className="fs-1">{habitacion.tipoHabitacion}</Card.Title>
          
          <Card.Text>
            { habitacion.dercripcion_breve }
          </Card.Text>
          <div className="mb-2 fs-5">
            <b>Capacidad: {habitacion.capacidad}</b>
            
          </div>
          <div className="mb-2 fs-5">
            <b>Tamaño: {habitacion.tamanio}</b>
            
          </div>
          <div className="mb-2 fs-3">
            <b>${habitacion.precio} X Noche</b>
            
          </div>
          <div>
            <Form>
              <Form.Group className="col-6" controlId="formFechaEntrada">
                <Form.Label>Fecha de Entrada</Form.Label>
                <Form.Control
                  type="date"
                  
                  value={fechaEntradaa}
                  onChange={(e) => setFechaEntradaa(e.target.value)}
                  min={today} // Solo permitir fechas futuras
                  required
                />
              </Form.Group>

              <Form.Group className="col-6" controlId="formFechaSalida">
                <Form.Label>Fecha de Salida</Form.Label>
                <Form.Control
                  type="date"
                  
                  value={fechaSalidaa}
                  onChange={(e) => setFechaSalidaa(e.target.value)}
                  min={fechaEntradaa} // Solo permitir fechas posteriores a la entrada
                  required
                />
              </Form.Group>
                <div className="d-flex align-content-md-end flex-md-wrap justify-content-end">
              <Button variant="dark" type="submit" className="mt-2">
                Reservar
              </Button>
                </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default CardDetalles;
