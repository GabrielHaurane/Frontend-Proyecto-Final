import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { borrarReserva } from '../../../helpers/queries.reserva.js';

const ItemReservas = ({reserva, fila}) => {
    return (
        <tr>
            <td>{fila}</td>
            <td>{reserva.imagen}</td>
            <td>{reserva.tipoHabitacion}</td>
            <td>{reserva.fechaEntrada}</td>
            <td>{reserva.fechaSalida}</td>
            <td>
                <Button variant='danger'>
Eliminar 
                </Button>
            </td>
        </tr>
    );
};

export default ItemReservas;