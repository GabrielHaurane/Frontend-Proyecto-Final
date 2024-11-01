import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { borrarReserva } from '../../../helpers/queries.reserva.js';

const ItemReservas = ({reserva, fila}) => {
    const {habitacion} = reserva;
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
        <td>{reserva.fechaEntrada}</td>
        <td>{reserva.fechaSalida}</td>
        <td>
          <Button variant="danger">Eliminar</Button>
        </td>
      </tr>
    );
};

export default ItemReservas;