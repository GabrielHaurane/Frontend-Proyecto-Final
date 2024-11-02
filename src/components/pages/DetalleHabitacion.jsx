import React, { useEffect, useState } from "react";
import { buscarHabitacionAPI } from "../../helpers/queries.js";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const URLReserva = import.meta.env.VITE_API_HABITACION
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

  // Función para manejar la reserva
  const handleReserva = async (e) => {
    e.preventDefault(); 
    const usuario = JSON.parse(sessionStorage.getItem("userKey"));
    
    if (!usuario) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes iniciar sesión para reservar una habitación.',
            confirmButtonText: 'Aceptar'
          });
          return;
    }
    const reservaData = {
        usuarioEmail: usuario.email, // Asegúrate de que estás enviando el email
        habitacionID: habitacion._id, // ID de la habitación
        fechaEntrada: fechaEntradaa,
        fechaSalida: fechaSalidaa,
    };
    try {
        
        const respuesta = await fetch(`${URLReserva}/reserva`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": `${usuario.token}` // Token de autorización si tu backend lo requiere
            },
            body: JSON.stringify(reservaData)
        });

        const datos = await respuesta.json();

        if (respuesta.ok) {
            Swal.fire({
                title: "Reserva Exitosa",
                text: `Tu reserva ha sido confirmada.`,
                icon: "success"
            });
            // Puedes redirigir al usuario o actualizar el estado de la UI aquí
        } else {
            Swal.fire({
                title: "Error",
                text: datos.mensaje || "No se pudo realizar la reserva",
                icon: "error"
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: "Ocurrió un error al realizar la reserva. Inténtalo nuevamente.",
            icon: "error"
        });
    }
  };

  return (
    <div className="flex-grow-1 container">
      <h1 className="text-center my-3">Detalles de la habitación</h1>
      
          <Card className="d-flex flex-lg-row flex-column mb-4">
            <div className="d-flex flex-wrap align-content-center">
              <img className="col-12 rounded-top-2" src={habitacion?.imagen || ""} alt="Imagen de la habitación" />
            </div>
            <Card.Body className="col-12">
              <Card.Title className="fs-2 col-12">
                {habitacion?.tipoHabitacion || <span className="placeholder col-12"></span>}
              </Card.Title>
              <Card.Text>{habitacion?.descripcion_breve || <span className="placeholder col-12"></span>}</Card.Text>
              <div className="mb-2 fs-5">
                <b>Capacidad: {habitacion?.capacidad || <span className="placeholder col-12"></span>}</b>
              </div>
              <div className="mb-2 fs-5">
                <b>Tamaño: {habitacion?.tamanio || <span className="placeholder col-12"></span>}</b>
              </div>
              <div className="mb-2 fs-3">
                <b>${habitacion?.precio || <span className="placeholder col-12"></span>} por noche</b>
              </div>
              
                <Form onSubmit={handleReserva}>
                  <Form.Group className="col-12" controlId="formFechaEntrada">
                    <Form.Label>Fecha de Entrada</Form.Label>
                    <Form.Control
                      type="date"
                      value={fechaEntradaa}
                      onChange={(e) => setFechaEntradaa(e.target.value)}
                      min={today}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="col-12" controlId="formFechaSalida">
                    <Form.Label>Fecha de Salida</Form.Label>
                    <Form.Control
                      type="date"
                      value={fechaSalidaa}
                      onChange={(e) => setFechaSalidaa(e.target.value)}
                      min={fechaEntradaa}
                      required
                    />
                  </Form.Group>
                  <div className="d-flex align-content-md-end flex-md-wrap justify-content-end my-2">
                    <Button variant="dark" type="submit" className="mt-2">
                      Reservar
                    </Button>
                  </div>
                </Form>
            </Card.Body>
          </Card>
      
    </div>
  );
};

export default DetalleHabitacion;
