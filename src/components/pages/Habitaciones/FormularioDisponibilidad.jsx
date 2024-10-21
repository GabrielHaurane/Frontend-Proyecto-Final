import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormularioDisponibilidad = () => {
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [adultos, setAdultos] = useState(1);
  const [ninos, setNinos] = useState(0);
  const [mensajeError, setMensajeError] = useState(""); // Para manejar mensajes de error
  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/catalogo?fechaEntrada=${fechaEntrada}&fechaSalida=${fechaSalida}`);
      const data = await response.json();

      if (response.ok) {
        // Redirige al catálogo de habitaciones con los datos obtenidos
        navegacion("/catalogo", { state: { habitaciones: data.habitaciones } });
      } else {
        setMensajeError(data.mensaje || "No se encontraron habitaciones.");
      }
    } catch (error) {
      console.error("Error al buscar habitaciones:", error);
      setMensajeError("Ocurrió un error al buscar las habitaciones.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container text-white d-flex flex-column flex-md-row">
      <div className="d-flex">
        <h3 className="fs-3 longi me-5 d-flex align-self-center">
          Buscar <br /> Disponibilidad
        </h3>
        <hr className="line-lateral" />
      </div>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-warp flex-column justify-content-between w-100 align-self-center"
      >
        <Form.Group controlId="formFechaEntrada" className="col-8 mb-2">
          <Form.Label>Fecha de Entrada</Form.Label>
          <Form.Control
            type="date"
            id="fechaEntrada"
            value={fechaEntrada}
            onChange={(e) => setFechaEntrada(e.target.value)}
            min={today}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFechaSalida" className="col-8 mb-2">
          <Form.Label>Fecha de Salida</Form.Label>
          <Form.Control
            type="date"
            id="fechaSalida"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
            min={fechaEntrada}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAdultos" className="col-8 mb-2">
          <Form.Label>Cantidad de Adultos</Form.Label>
          <Form.Control
            type="number"
            value={adultos}
            onChange={(e) => setAdultos(e.target.value)}
            min={1}
            required
          />
        </Form.Group>

        <Form.Group controlId="formNinos" className="col-8 mb-2">
          <Form.Label>Cantidad de Niños</Form.Label>
          <Form.Control
            type="number"
            value={ninos}
            onChange={(e) => setNinos(e.target.value)}
            min={0}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="h-100 align-self-start mt-2 col-8">
          Buscar Disponibilidad
        </Button>

        {mensajeError && <p className="text-danger">{mensajeError}</p>} {/* Mensaje de error */}
      </Form>
    </div>
  );
};

export default FormularioDisponibilidad;