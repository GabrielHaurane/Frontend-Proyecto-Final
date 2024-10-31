import React from 'react';
import { Table } from 'react-bootstrap';
const Reservas = ({setUsuarioLogueado}) => {
    return (
        <div className='mainSection'>
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
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Reservas;