import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const FormularioDisponibilidad = () => {
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [adultos, setAdultos] = useState(1);
  const [ninos, setNinos] = useState(0);
  const [mensajeError, setMensajeError] = useState(""); // Para manejar mensajes de error

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();

  const handleSubmit2 = async () => {
   

    try {
      const response = await fetch(
        `${URLHabitacion}/habitaciones?fechaEntrada=${fechaEntrada}&fechaSalida=${fechaSalida}`
      );
      if (!response.ok) {
        throw new Error("Error al buscar habitaciones");
      }
      const data = await response.json();
      console.log(data); // Aquí puedes manejar la respuesta como quieras
    } catch (error) {
      console.error("Error al buscar habitaciones:", error.message);
      setMensajeError("No se encontraron habitaciones disponibles.");
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const fechaEntradas = watch("fechaEntrada");
  return (
    <div className="container text-white d-flex flex-column flex-md-row">
      <div className="d-flex">
        <h3 className="fs-3 longi me-5 d-flex align-self-center">
          Buscar <br /> Disponibilidad
        </h3>
        <hr className="line-lateral" />
      </div>
      <Form
        onSubmit={handleSubmit(handleSubmit2)}
        className="d-flex flex-wrap flex-column justify-content-between w-100 align-self-center"
      >
        <Form.Group className="col-8 mb-2">
          <Form.Label>Fecha de Entrada</Form.Label>
          <Form.Control
            type="date"
            id="fechaEntrada"
            
            onChange={(e) => setFechaEntrada(e.target.value)}
            
            {...register("fechaEntrada", {
              required: "La fecha de entrada es obligatoria",
              min: {
                value: today,
                message: "La fecha de entrada no puede ser anterior a hoy",
              },
            })}
            min={today}
            required
          />
          <Form.Text className="text-danger">
            {errors.fechaEntrada?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="col-8 mb-2">
          <Form.Label>Fecha de Salida</Form.Label>
          <Form.Control
            type="date"
            id="fechaSalida"
            
            onChange={(e) => setFechaSalida(e.target.value)}
            min={fechaEntradas || today}
            required
            {...register("fechaSalida", {
              required: "La fecha de salida es obligatoria",
              validate: (value) =>
                value > fechaEntradas ||
                "La fecha de salida debe ser posterior a la de entrada",
            })}
          />
          <Form.Text className="text-danger">
            {errors.fechaSalida?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="col-8 mb-2">
          <Form.Label>Cantidad de Adultos</Form.Label>
          <Form.Control
            type="number"
            
            onChange={(e) => setAdultos(Number(e.target.value))} // Asegúrate de convertir a número
            required
            
            {...register("adultos", {
              required: "La cantidad de adultos es obligatoria",
              min: {
                value: 1,
                message: "Debe haber al menos 1 adulto",
              },
            })}
            
          />
          <Form.Text className="text-danger">
            {errors.adultos?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="col-8 mb-2">
          <Form.Label>Cantidad de Niños</Form.Label>
          <Form.Control
            type="number"
            
            onChange={(e) => setNinos(Number(e.target.value))} // Asegúrate de convertir a número
            
            required
            {...register("ninos", {
              required: "La cantidad de ninos es obligatoria",
              min: {
                value: 0,
                message: "La cantidad de niños no puede ser negativa",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ninos?.message}
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="h-100 align-self-start mt-2 col-8"
        >
          Buscar Disponibilidad
        </Button>
        {mensajeError && <p className="text-danger">{mensajeError}</p>}{" "}
        {/* Mensaje de error */}
      </Form>
    </div>
  );
};

export default FormularioDisponibilidad;
