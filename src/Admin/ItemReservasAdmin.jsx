import React from 'react';


const ItemReservasAdmin = ({reserva, fila}) => {
    const { habitacion, fechaEntrada, fechaSalida, email } = reserva;
    const formatearFecha = (fechaISO) => {
      const fecha = new Date(fechaISO);
      return fecha.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

return (
  <tr>
    <td>{fila}</td>
    <td>{reserva.usuarioEmail}</td>
    <td>{habitacion ? habitacion.tipoHabitacion : "Cargando..."}</td>
    <td>
      {habitacion ? (
        <img
          src={habitacion.imagen}
          alt={habitacion.tipoHabitacion}
          className="img-admin"
        />
      ) : (
        "Cargando..."
      )}
    </td>
    <td>{formatearFecha(fechaEntrada)}</td>
    <td>{formatearFecha(fechaSalida)}</td>
  </tr>
);
};

export default ItemReservasAdmin;