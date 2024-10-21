import React from 'react';
import { useLocation } from 'react-router-dom';

const Catalogo = () => {
    const location = useLocation();
  const { habitaciones } = location.state || { habitaciones: [] };

    return (
        <div>
      <h1>Catálogo de Habitaciones</h1>
      {habitaciones.length > 0 ? (
        habitaciones.map((habitacion) => (
          <div key={habitacion._id}>
            <h2>{habitacion.tipoHabitacion}</h2>
            <p>Capacidad: {habitacion.capacidad}</p>
            <p>Precio: ${habitacion.precio}</p>
            <p>Descripción Breve: {habitacion.descripcion_breve}</p>
            <img src={habitacion.imagen} alt={habitacion.tipoHabitacion} />
          </div>
        ))
      ) : (
        <p>No hay habitaciones disponibles.</p>
      )}
    </div>
    );
};

export default Catalogo;