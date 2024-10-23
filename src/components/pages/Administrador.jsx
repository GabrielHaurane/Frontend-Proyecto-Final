import { Table, Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { listarUsuarios } from "../../helpers/queries.usuarios.js";
import { listarHabitacionesAdmin } from "../../helpers/queries.js";
import Swal from "sweetalert2";
import ItemUsuarios from "../../Admin/ItemUsuarios.jsx";
import ItemHabitacion from "../../Admin/ItemHabitacion.jsx";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [mostrarHabitaciones, setMostrarHabitaciones]=useState(false)
  const [mostrarUsuarios, setMostrarUsuarios]=useState(false)


  useEffect(() => {
       if (mostrarHabitaciones) {
         cargarHabitaciones();
       }
       if (mostrarUsuarios) {
         cargarUsuarios();
       }
  }, [mostrarHabitaciones, mostrarUsuarios]);

  const cargarHabitaciones = async () => {
    const respuesta = await listarHabitacionesAdmin();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaHabitaciones(datos);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pueden mostrar las habitaciones, intentá más tarde",
        icon: "error",
      });
    }
  };

  const cargarUsuarios = async ()=>{
    const respuesta = await listarUsuarios();
    if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setListaUsuarios(datos);
    }else{
        Swal.fire({
          title: "Error",
          text: "No se pueden mostrar los usuarios, intentá más tarde",
          icon: "error",
        });
    }
  }


const desplegarUsuarios = ()=>{
    setMostrarUsuarios(!mostrarUsuarios)
}
const desplegarHabitaciones = ()=>{
    setMostrarHabitaciones(!mostrarHabitaciones)
}

  return (
    <section className="mainSection container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <DropdownButton
          id="dropdown-habitaciones"
          title="Gestionar Habitaciones"
          onClick={desplegarHabitaciones}
        >
          <Dropdown.Item>
            <p className="text-secondary-emphasis fw-bold">Lista de habitaciones</p>
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {mostrarHabitaciones && (
        <>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Fila</th>
                <th>Tipo de Habitación</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Disponibilidad</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {listaHabitaciones.map((habitacion, index) => (
                <ItemHabitacion
                  key={habitacion._id}
                  habitacion={habitacion}
                  fila={index + 1}
                  setListaHabitaciones={setListaHabitaciones}
                />
              ))}
            </tbody>
          </Table>
        </>
      )}

      {/* Botón para gestionar usuarios */}
      <div className="d-flex justify-content-between align-items-center mt-5">
        <DropdownButton
          id="dropdown-usuarios"
          title="Gestionar Usuarios"
          onClick={desplegarUsuarios}
        >
          <Dropdown.Item>
            <p className="text-secondary-emphasis fw-bold">Lista de Usuarios</p>
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {mostrarUsuarios && (
        <>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Fila</th>
                <th>Email</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {listaUsuarios.map((usuario, index) => (
                <ItemUsuarios
                  key={usuario._id}
                  usuario={usuario}
                  fila={index + 1}
                  setListaUsuarios={setListaUsuarios}
                />
              ))}
            </tbody>
          </Table>
        </>
      )}
    </section>
  );
};

export default Administrador;
