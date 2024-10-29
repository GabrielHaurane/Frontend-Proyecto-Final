import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
const CardDetalles = ({habitacion}) => {
  // Estado para las fechas de entrada y salida
  const [fechaEntradaa, setFechaEntradaa] = useState("");
  const [fechaSalidaa, setFechaSalidaa] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [showModal, setShowModal] = useState(false);
  const [metodoPago, setMetodoPago] = useState("");

  const handleReservar = (e) => {
    e.preventDefault();
    setShowModal(true); // Abre el modal al hacer clic en Reservar
  };

  const handlePago = () => {
    // Aquí puedes manejar la lógica para procesar la reserva con el método de pago
    console.log("Método de pago seleccionado:", metodoPago);
    // Cierra el modal
    setShowModal(false);
  };

  const handleClose = () => setShowModal(false);



  return (
    <div className="m-2">
      <Card className="d-flex flex-md-row flex-column">
        <div className="d-flex flex-wrap align-content-center">
          <img
            className="col-12 rounded-top-2 "
            src={habitacion.imagen}
            // 
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
            <Form onSubmit={handleReservar}>
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
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar Método de Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              type="radio"
              label="Tarjeta de Crédito"
              name="metodoPago"
              id="credito"
              onChange={() => setMetodoPago("Credito")}
              checked={metodoPago === "Credito"}
            />
            <Form.Check
              type="radio"
              label="Tarjeta de Débito"
              name="metodoPago"
              id="debito"
              onChange={() => setMetodoPago("Debito")}
              checked={metodoPago === "Debito"}
            />
            {/* Mostrar formulario dependiendo del método de pago seleccionado */}
            {metodoPago === "Credito" && (
              <div className="mt-3">
                <Form.Group controlId="numeroTarjeta">
                  <Form.Label>Número de Tarjeta</Form.Label>
                  <Form.Control type="text" placeholder="1234 5678 9123 4567" required />
                </Form.Group>
                <Form.Group controlId="fechaVencimiento">
                  <Form.Label>Fecha de Vencimiento</Form.Label>
                  <Form.Control type="month" required />
                </Form.Group>
                <Form.Group controlId="codigoSeguridad">
                  <Form.Label>Código de Seguridad (CVV)</Form.Label>
                  <Form.Control type="text" placeholder="123" required />
                </Form.Group>
                <Form.Group controlId="cuotas">
                  <Form.Label>Cuotas</Form.Label>
                  <Form.Control as="select" required>
                    <option value="1">1 cuota</option>
                    <option value="3">3 cuotas</option>
                    <option value="6">6 cuotas</option>
                    <option value="12">12 cuotas</option>
                  </Form.Control>
                </Form.Group>
              </div>
            )}

            {metodoPago === "Debito" && (
              <div className="mt-3">
                <Form.Group controlId="numeroTarjetaDebito">
                  <Form.Label>Número de Tarjeta</Form.Label>
                  <Form.Control type="text" placeholder="1234 5678 9123 4567" required />
                </Form.Group>
                <Form.Group controlId="codigoSeguridadDebito">
                  <Form.Label>Código de Seguridad (CVV)</Form.Label>
                  <Form.Control type="text" placeholder="123" required />
                </Form.Group>
                <Form.Group controlId="fechaVencimientoDebito">
                  <Form.Label>Fecha de Vencimiento</Form.Label>
                  <Form.Control type="month" required />
                </Form.Group>
              </div>
            )}

            {metodoPago === "Mercado Pago" && (
              <div className="mt-3">
                <p>Serás redirigido a Mercado Pago para completar el pago.</p>
                {/* Aquí podrías redirigir a la API de Mercado Pago */}
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handlePago}>
            Confirmar Pago
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardDetalles;
