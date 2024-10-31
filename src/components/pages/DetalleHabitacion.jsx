import React, { useEffect, useState } from "react";
import { buscarHabitacionAPI } from "../../helpers/queries.js";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetalleHabitacion = () => {
  const { id } = useParams();
  const [habitacion, setHabitacion] = useState({});
  const [fechaEntradaa, setFechaEntradaa] = useState("");
  const [fechaSalidaa, setFechaSalidaa] = useState("");
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const obtenerHabitacion = async () => {
      try {
        const response = await buscarHabitacionAPI(id);
        if (response.ok) {
          const habi = await response.json();
          setHabitacion(habi);
        } else {
          console.error("Error en la respuesta de la API");
        }
      } catch (error) {
        console.error("Error al obtener detalles de la habitación");
      }
    };
    obtenerHabitacion();
  }, [id]);

  return (
    <div className="flex-grow-1 container">
      <h1>Detalles de la habitación</h1>
      <section>
        <div className="m-2">
          <Card className="d-flex flex-md-row flex-column">
            <div className="d-flex flex-wrap align-content-center">
              <img className="col-12 rounded-top-2" src={habitacion?.imagen || ""} alt="Imagen de la habitación" />
            </div>
            <Card.Body className="col-12">
              <Card.Title className="fs-1">
                {habitacion?.tipoHabitacion || "Tipo de habitación no disponible"}
              </Card.Title>
              <Card.Text>{habitacion?.descripcion_breve || "Descripción no disponible"}</Card.Text>
              <div className="mb-2 fs-5">
                <b>Capacidad: {habitacion?.capacidad || "N/A"}</b>
              </div>
              <div className="mb-2 fs-5">
                <b>Tamaño: {habitacion?.tamanio || "N/A"}</b>
              </div>
              <div className="mb-2 fs-3">
                <b>${habitacion?.precio || "N/A"} por noche</b>
              </div>
              <div>
                <Form>
                  <Form.Group className="col-6" controlId="formFechaEntrada">
                    <Form.Label>Fecha de Entrada</Form.Label>
                    <Form.Control
                      type="date"
                      value={fechaEntradaa}
                      onChange={(e) => setFechaEntradaa(e.target.value)}
                      min={today}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="col-6" controlId="formFechaSalida">
                    <Form.Label>Fecha de Salida</Form.Label>
                    <Form.Control
                      type="date"
                      value={fechaSalidaa}
                      onChange={(e) => setFechaSalidaa(e.target.value)}
                      min={fechaEntradaa}
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
      </section>
    </div>
  );
};

export default DetalleHabitacion;
