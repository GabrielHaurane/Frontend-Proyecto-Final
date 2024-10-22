import React from 'react';
import CardDetalles from './Habitaciones/CardDetalles.jsx';
const DetalleHabitacion = () => {
    return (
        <div className=' flex-grow-1 container'>
            <h1>Detalles de la habitacion</h1>
            <section>
            <CardDetalles></CardDetalles>
            </section>
            
        </div>
    );
};

export default DetalleHabitacion;