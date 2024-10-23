import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  eliminarHabitacionAdmin,
  listarHabitacionesAdmin,
} from "../helpers/queries.js";

const ItemHabitacion = ({ fila, setListaHabitaciones, habitacion }) => {
 
    const eliminarHabitacion = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar la habitación?",
      text: "No puedes revertir esta operacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarHabitacionAdmin(habitacion._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `La habitacion fue elminada correctamente`,
            icon: "success",
          });
          const habitacionesAPI = await listarHabitacionesAdmin();
          if (habitacionesAPI.status === 200) {
            const habitacionesActualizadas = await habitacionesAPI.json();
            setListaHabitaciones(habitacionesActualizadas);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La habitación no pudo ser eliminada, intenta de nuevo en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr className="text-center">
      <td>{fila}</td>
      <td>{habitacion.tipoHabitacion}</td>
      <td>
        <img
          src={habitacion.imagen}
          alt="imagen de una habitacion de hotel"
          className="img-admin"
        />
      </td>
      <td>{habitacion.precio}</td>
      <td>{habitacion.disponibilidad ? "Disponible" : "No disponible"}</td>
      <td>
        <Button variant="danger" onClick={eliminarHabitacion}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemHabitacion;
