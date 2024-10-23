import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarUsuario, listarUsuarios } from "../helpers/queries.usuarios.js";

const ItemUsuarios = ({usuario, fila, setListaUsuarios}) => {
const eliminarUsuario =  () => {
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
        const respuesta = await borrarUsuario(usuario._id)
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `El usuario ${usuario.email} fue elminado correctamente`,
            icon: "success",
          });
          const usuariosAPI = await  listarUsuarios();
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
}


    return (
      <tr className="text-center">
        <td>{fila}</td>
        <td>{usuario.email}</td>

        <td >
          <Button variant="danger" onClick={eliminarUsuario}>
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
};

export default ItemUsuarios;