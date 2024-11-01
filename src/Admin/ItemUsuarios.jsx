import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  borrarUsuario,
  editarUsuario,
  listarUsuarios,
} from "../helpers/queries.usuarios.js";
import { useState } from "react";

const ItemUsuarios = ({ usuario, fila, setListaUsuarios }) => {
  const [nuevoRol, setNuevoRol] = useState(usuario.rol);

  const eliminarUsuario = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar el usuario?",
      text: "No puedes revertir esta operacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuario(usuario._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `El usuario ${usuario.email} fue eliminado correctamente`,
            icon: "success",
          });
          const usuariosAPI = await listarUsuarios();
          if (usuariosAPI.status === 200) {
            const usuariosActualizados = await usuariosAPI.json();
            setListaUsuarios(usuariosActualizados);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El usuario ${usuario.email} no pudo ser eliminado, intenta de nuevo en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  const cambiarRol = async () => {
    const usuarioEditado = { rol: nuevoRol };
    const respuesta = await editarUsuario(usuarioEditado, usuario._id);
    if (respuesta.status === 200) {
      Swal.fire({
        title: "Rol Cambiado",
        text: `El rol del usuario ${usuario.email} fue cambiado a ${nuevoRol} con éxito.`,
        icon: "success",
      });
      const usuariosAPI = await listarUsuarios();
      if (usuariosAPI.status === 200) {
        const usuariosActualizados = await usuariosAPI.json();
        setListaUsuarios(usuariosActualizados);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: `No se pudo cambiar el rol del usuario ${usuario.email}, intenta de nuevo más tarde.`,
        icon: "error",
      });
    }
  };

  return (
    <tr className="text-center">
      <td>{fila}</td>
      <td>{usuario.email}</td>
      <td className="col-lg-4">
        <Form.Select
        className="text-center"
          value={nuevoRol}
          onChange={(e) => setNuevoRol(e.target.value)}
        >
          <option value="usuario">Usuario</option>
          <option value="admin">Admin</option>
        </Form.Select>
        <Button onClick={cambiarRol} className="my-lg-3 col-lg-4">
          Cambiar Rol
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={eliminarUsuario}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuarios;
