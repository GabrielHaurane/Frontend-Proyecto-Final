import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { listarUsuarios } from "../../helpers/queries.usuarios.js";
import {
  listarHabitacionesAdmin,
  obtenerHabitacionAdmin,
} from "../../helpers/queries.js";
import { listarReservasAdmin } from "../../helpers/queries.reserva.js";
import ItemUsuarios from "../../Admin/ItemUsuarios.jsx";
import ItemHabitacion from "../../Admin/ItemHabitacion.jsx";
import ItemReservasAdmin from "../../Admin/ItemReservasAdmin.jsx";

const Administrador = ({ email, token }) => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [listaReservas, setListaReservas] = useState([]);
  const [mostrarHabitaciones, setMostrarHabitaciones] = useState(false);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [mostrarReservas, setMostrarReservas] = useState(false);

  const habitacionesRef = useRef(null);
  const usuariosRef = useRef(null);
  const reservasRef = useRef(null);

  useEffect(() => {
    if (mostrarHabitaciones) {
      cargarHabitaciones();
      // habitacionesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (mostrarUsuarios) {
      cargarUsuarios();
      // usuariosRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (mostrarReservas) {
      cargarReservas();
      // reservasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mostrarHabitaciones, mostrarUsuarios, mostrarReservas]);

  const cargarHabitaciones = async () => {
    const respuesta = await listarHabitacionesAdmin(email, token);
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

  const cargarReservas = async () => {
    const respuesta = await listarReservasAdmin(email, token);
    if (respuesta) {
      const reservasConDetalles = await Promise.all(
        respuesta.map(async (reserva) => {
          const habitacion = await obtenerHabitacionAdmin(reserva.habitacionID);
          return { ...reserva, habitacion };
        })
      );
      setListaReservas(reservasConDetalles);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pueden mostrar las reservas, intentá más tarde",
        icon: "error",
      });
    }
  };

  const desplegarUsuarios = () => {
    setMostrarUsuarios(!mostrarUsuarios);

    if (!mostrarUsuarios && usuariosRef.current) {
      usuariosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const desplegarHabitaciones = () => {
    setMostrarHabitaciones(!mostrarHabitaciones);

    if (!mostrarHabitaciones && habitacionesRef.current) {
      habitacionesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const desplegarReservas = () => {
    setMostrarReservas(!mostrarReservas);

    if (!mostrarReservas && reservasRef.current) {
      reservasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mainSection container-fluid bg-registro bg-admin">
      <div className="text-center my-5">
        <h1 className="titulo-admin">Administración Hotel Code</h1>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Button
          className="m-auto mt-5 mb-5 btn-admin"
          onClick={desplegarHabitaciones}
        >
          {mostrarHabitaciones ? "Ocultar Lista" : "Gestionar Habitaciones"}
        </Button>
      </div>
      {mostrarHabitaciones && (
        <>
          <hr />
          <div
            className="d-flex justify-content-between align-items-center mt-5"
            ref={habitacionesRef}
          >
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
      <div
        className="d-flex justify-content-between align-items-center mt-5"
        ref={usuariosRef}
      >
        <Button
          className="m-auto mt-5 mb-lg-5 btn-admin mb-5"
          onClick={desplegarUsuarios}
        >
          {mostrarUsuarios ? "Ocultar Lista" : "Lista de Usuarios"}
        </Button>
      </div>
      {mostrarUsuarios && (
        <>
          <hr />
          <div className="d-flex mt-lg-4">
            <h2 className="display-4 ">Usuarios</h2>
          </div>
          <div className="tabla-scroll">
            <Table responsive striped bordered hover className="tabla">
              <thead>
                <tr className="text-center">
                  <th>Fila</th>
                  <th>Email</th>
                  <th className="row">Permisos</th>
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
      <div
        className="d-flex justify-content-between align-items-center mt-5"
        ref={reservasRef}
      >
        <Button
          className="m-auto mt-5 mb-lg-5 btn-admin mb-5"
          onClick={desplegarReservas}
        >
          {mostrarReservas ? "Ocultar Lista" : "Lista de Reservas"}
        </Button>
      </div>
      {mostrarReservas && (
        <>
          <hr />
          <div className="d-flex mt-lg-4">
            <h2 className="display-4 ">Reservas</h2>
          </div>
          <div className="tabla-scroll">
            <Table responsive striped bordered hover className="tabla">
              <thead>
                <tr className="text-center">
                  <th>Fila</th>
                  <th>Usuario</th>
                  <th>Tipo de Habitación</th>
                  <th>Imagen</th>
                  <th>Fecha Entrada</th>
                  <th>Fecha Salida</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {listaReservas.map((reserva, index) => (
                  <ItemReservasAdmin
                    key={reserva._id}
                    reserva={reserva}
                    fila={index + 1}
                    setListaReservas={setListaReservas}
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
