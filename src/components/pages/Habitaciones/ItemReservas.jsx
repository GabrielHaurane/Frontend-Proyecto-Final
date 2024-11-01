import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarReserva } from "../../../helpers/queries.reserva.js";

const ItemReservas = ({ reserva, fila, setListaReservas }) => {
  const { habitacion, fechaEntrada, fechaSalida } = reserva;

   const formatearFecha = (fechaISO) => {
     const fecha = new Date(fechaISO);
     return fecha.toLocaleDateString("es-ES", {
       year: "numeric",
       month: "long",
       day: "numeric",
     });
   };

  const eliminarReserva = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar la reserva?",
      text: "No puedes revertir esta operación.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarReserva(reserva._id);
        if (respuesta.ok) {
          Swal.fire({
            title: "Eliminada",
            text: `La reserva fue eliminada correctamente.`,
            icon: "success",
          });
          setListaReservas((reservasPrevias) =>
            reservasPrevias.filter((item) => item._id !== reserva._id)
          );
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `La reserva no pudo ser eliminada, intenta de nuevo en unos minutos.`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{fila}</td>
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
      <td>
        <Button variant="danger" onClick={eliminarReserva}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReservas;
