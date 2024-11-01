import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ItemReservas from "./Habitaciones/ItemReservas";
import Swal from "sweetalert2";
import { listarReservas } from "../../helpers/queries.reserva.js";
import { obtenerHabitacionAdmin } from "../../helpers/queries.js";

const Reservas = ({ email, token }) => {
  const [listaReservas, setListaReservas] = useState([]);

  const cargarReservas = async () => {
    const datos = await listarReservas(email, token);
    if (datos) {
        const reservasConDetalles = await Promise.all(datos.map(async(reserva)=>{
            const habitacion = await obtenerHabitacionAdmin(reserva.habitacionID)
            return {...reserva, habitacion}
        }))
      setListaReservas(reservasConDetalles);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pueden mostrar las reservas, intenta más tarde",
        icon: "error",
      });
    }
  };
  useEffect(() => {
    cargarReservas();
  }, [email, token]);
  return (
    <div className="mainSection container">
      <div>
        <h1>Reservas</h1>
      </div>
      <div className="tabla-scroll">
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
            {Array.isArray(listaReservas) && listaReservas.length > 0 ? (
              listaReservas.map((reserva, index) => (
                <ItemReservas
                  key={reserva._id}
                  reserva={reserva}
                  fila={index + 1}
                  setListaReservas={setListaReservas}
                ></ItemReservas>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No hay reservas
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Reservas;
