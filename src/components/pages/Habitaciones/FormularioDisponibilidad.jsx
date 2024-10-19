import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const FormularioDisponibilidad = () => {
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [adultos, setAdultos] = useState(1);
  const [ninos, setNinos] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      fechaEntrada,
      fechaSalida,
      adultos,
      ninos,
    });
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container text-white d-flex">
        <div className="d-flex">
      <h3 className="fs-3 longi me-5 d-flex align-self-center">
        Buscar <br /> Disponibilidad
      </h3>
      <hr className="line-lateral"/>
        </div>
      <Form
        onSubmit={handleSubmit}
        className="d-flex justify-content-between w-100 align-self-center"
      >
        <Form.Group controlId="formFechaEntrada">
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
        <Form.Group controlId="formFechaSalida">
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

        <Form.Group controlId="formAdultos">
          <Form.Label>Cantidad de Adultos</Form.Label>
          <Form.Control
            as="select"
            value={adultos}
            onChange={(e) => setAdultos(e.target.value)}
            required
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNinos">
          <Form.Label>Cantidad de Niños</Form.Label>
          <Form.Control
            as="select"
            value={ninos}
            onChange={(e) => setNinos(e.target.value)}
            required
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="h-100 align-self-end">
          Buscar Disponibilidad
        </Button>
      </Form>
    </div>
  );
};

export default FormularioDisponibilidad;
