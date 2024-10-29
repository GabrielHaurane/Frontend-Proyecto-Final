import React, { useEffect, useState } from 'react';
import CardDetalles from './Habitaciones/CardDetalles.jsx';
import { buscarHabitacionesDisponibles } from '../../helpers/queries.js';
const DetalleHabitacion = () => {
    const [habitacion, sethabitacion]= useState(null)
    useEffect(()=>{
        const obtenerHabitacion = async () => {
            try {
                const response = await buscarHabitacionesDisponibles();
                sethabitacion(response.data)
            } catch (error) {
                console.error('Error al obtener detalles de la habitacion')
            }
        };
        obtenerHabitacion
    },[habitacion])
    return (
        <div className=' flex-grow-1 container'>
            <h1>Detalles de la habitacion</h1>
            <section>
                {
                    habitacion ?(
                        <CardDetalles habitacion={habitacion}></CardDetalles>
                    ) :
                    <p>Cargando la habitacion...</p>
                }
            </section>
            
        </div>
    );
};

export default DetalleHabitacion;