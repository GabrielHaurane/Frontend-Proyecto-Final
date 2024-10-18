const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLRegistro = import.meta.env.VITE_API_REGISTRO;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    return false;
  }
};
export const registro = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URLRegistro, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    return false;
  }
};
