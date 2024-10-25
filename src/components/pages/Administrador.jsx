import { Table, Button } from "react-bootstrap";
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
  const [mostrarHabitaciones, setMostrarHabitaciones] = useState(false);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);

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

  const cargarUsuarios = async () => {
    const respuesta = await listarUsuarios();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaUsuarios(datos);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pueden mostrar los usuarios, intentá más tarde",
        icon: "error",
      });
    }
  };

  const desplegarUsuarios = () => {
    setMostrarUsuarios(!mostrarUsuarios);
  };
  const desplegarHabitaciones = () => {
    setMostrarHabitaciones(!mostrarHabitaciones);
  };

  return (
    <section className="mainSection container-fluid bg-registro">
      <div className="text-center my-5">
        <h1>Administración Hotel Code</h1>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Button className="m-auto mt-5 mb-5" onClick={desplegarHabitaciones}>
          Gestionar Habitaciones
        </Button>
      </div>
      {mostrarHabitaciones && (
        <>
          <hr />
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h2 className="display-4 ">Habitaciones</h2>
            <Link className="btn btn-primary" to="/administrador/crear">
              <i className="bi bi-file-earmark-plus"></i>
            </Link>
          </div>
          <div className="tabla-scroll">
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
          </div>
        </>
      )}
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Button className="m-auto mt-5 mb-lg-5" onClick={desplegarUsuarios}>
          Gestionar Usuarios
        </Button>
      </div>
      {mostrarUsuarios && (
        <>
          <hr />
          <div className="d-flex mt-lg-4">
            <h2 className="display-4 ">Usuarios</h2>
          </div>
          <div className="tabla-scroll">
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
          </div>
        </>
      )}
    </section>
  );
};

export default Administrador;
