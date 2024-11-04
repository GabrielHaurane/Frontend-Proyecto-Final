import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ItemReservas from "./Habitaciones/ItemReservas";
import Swal from "sweetalert2";
import { listarReservas } from "../../helpers/queries.reserva.js";
import { obtenerHabitacionAdmin } from "../../helpers/queries.js";

const Reservas = ({ email, token }) => {
  const [listaReservas, setListaReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarReservas = async () => {
    setCargando(true);
    const datos = await listarReservas(email, token);
    if (datos) {
      const reservasConDetalles = await Promise.all(
        datos.map(async (reserva) => {
          const habitacion = await obtenerHabitacionAdmin(reserva.habitacionID);
          return { ...reserva, habitacion };
        })
      );
      setListaReservas(reservasConDetalles);
    }
    setCargando(false);
  };
  useEffect(() => {
    cargarReservas();
  }, [email, token]);
  return (
    <div className="backQS flex-grow-1">
      <div className=" container">
        <h1 className="text-center my-3">Mis Reservas</h1>
        <div className="tabla-scroll">
          {cargando ? (
            <div className="text-center my-5">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            <Table responsive striped>
              <thead>
                <tr>
                  <th className="text-center">Fila</th>
                  <th className="text-center">Tipo Habitacion</th>
                  <th className="text-center">Imagen</th>
                  <th className="text-center">Fecha Entrada</th>
                  <th className="text-center">Fecha Salida</th>
                  <th className="text-center">Opciones</th>
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
                      Aún no hay reservas
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservas;
