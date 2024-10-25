import React, { useEffect, useState } from "react";
import { obtenerCatalogoHabitaciones } from "../../helpers/queries.js"; // Ajusta la ruta según tu estructura de archivos
const URLHabitacion = import.meta.env.VITE_API_HABITACION;
import CardHabitacion from './Habitaciones/CardHabitacion.jsx';

const Catalogo = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    const obtenerHabitaciones = async () => {
      try {
        const response = await fetch(`${URLHabitacion}/catalogo`);
        if (!response.ok) {
          throw new Error("Error al obtener las habitaciones");
        }
        const data = await response.json();
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
      <h1>Catálogo de Habitaciones</h1>
      {mensajeError && <div className="alert alert-warning">{mensajeError}</div>}
      
      {habitaciones.length > 0 ? (
        <div className="row">
          {habitaciones.map((habitacion) => (
            <CardHabitacion key={habitacion._id} habitacion={habitacion} />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
          <h3 className="fs-3 text-center">No hay habitaciones disponibles</h3>
        </div>
      )}
    </div>
    );
};

export default Catalogo;