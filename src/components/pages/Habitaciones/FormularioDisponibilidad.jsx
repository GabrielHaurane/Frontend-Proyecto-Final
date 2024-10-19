import React from 'react';

const FormularioDisponibilidad = () => {
    const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [adultos, setAdultos] = useState(1);
  const [ninos, setNinos] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para buscar la disponibilidad
    console.log({
      fechaEntrada,
      fechaSalida,
      adultos,
      ninos,
    });
  };

    return (
        <div className="container mt-4">
        <h2>Buscar Disponibilidad</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFechaEntrada">
            <Form.Label>Fecha de Entrada</Form.Label>
            <Form.Control
              type="date"
              value={fechaEntrada}
              onChange={(e) => setFechaEntrada(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formFechaSalida">
            <Form.Label>Fecha de Salida</Form.Label>
            <Form.Control
              type="date"
              value={fechaSalida}
              onChange={(e) => setFechaSalida(e.target.value)}
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

          <Button variant="primary" type="submit">
            Buscar Disponibilidad
          </Button>
        </Form>
      </div>
    );
};

export default FormularioDisponibilidad;