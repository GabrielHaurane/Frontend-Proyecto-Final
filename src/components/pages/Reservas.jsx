import{ useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ItemReservas from './Habitaciones/ItemReservas';
import Swal from 'sweetalert2';
import { listarReservas } from '../../helpers/queries.reserva.js';

const Reservas = () => {
    const [listaReservas, setListaReservas] =useState([])

    const cargarReservas = async () =>{
        const datos = await listarReservas()
        if (datos) {
            setListaReservas(datos)
        }else{
            Swal.fire({
              title: "Error",
              text: "No se pueden mostrar las reservas, intenta más tarde",
              icon: "error",
            });
        }
    }
    return (
        <div className='mainSection container'>
            <div>
                <h1>Reservas</h1>
            </div>
            <div>
                <Table responsive striped>
                    <thead>
                       <tr>
                        <th>Fila</th>
                        <th>Tipo Habitacion</th>
                        <th>Imagen</th>
                        <th>Fecha Entrada</th>
                        <th>Fecha Salida</th>
                        <th>Opciones</th>
                       </tr>
                    </thead>
                    <tbody>
                <ItemReservas></ItemReservas>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Reservas;