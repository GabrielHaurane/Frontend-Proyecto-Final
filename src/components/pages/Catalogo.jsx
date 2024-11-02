import React, { useEffect, useState } from "react";
import { listadoHabitacionesDisponibles } from "../../helpers/queries.js"; 
import CardHabitacion from "./Habitaciones/CardHabitacion.jsx";

const Catalogo = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    const obtenerHabitaciones = async () => {
      try {
        const data = await listadoHabitacionesDisponibles();
        if (data === null) {
          throw new Error("Error al obtener las habitaciones");
        }

        if (data.length === 0) {
          setMensajeError("No hay habitaciones disponibles.");
        } else {
          setHabitaciones(data);
        }
      } catch (error) {
        console.error("Error al obtener habitaciones:", error);
        setMensajeError("Ocurrió un error al cargar las habitaciones.");
      }
    };

    obtenerHabitaciones();
  }, []);

  return (
    <div className="container flex-grow-1">
      <h1 className="text-center my-3">Catálogo de Habitaciones</h1>
      <section className="d-flex justify-content-center">
      {mensajeError && (
        <div className="alert alert-warning">{mensajeError}</div>
      )}

      {habitaciones.length > 0 ? (
        <div className="row">
          {habitaciones.map((habitacion) => (
            <CardHabitacion key={habitacion._id} habitacion={habitacion} />
          ))}
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      </section>
    </div>
  );
};

export default Catalogo;
