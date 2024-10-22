const URLUsuario = import.meta.env.VITE_API_USUARIO;


export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuario + "/login", {
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
    const respuesta = await fetch(URLUsuario + "/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: usuarioNuevo.email,
        password: usuarioNuevo.password,
        confirmarPassword: usuarioNuevo.confirmarPassword,
      }),
    });
    return respuesta;
  } catch (error) {
    return false;
  }
};

export const obtenerUsuario = async (id) => {
  try {
    const respuesta = await fetch(URLUsuario + "/" + id);
    return respuesta;
  } catch (error) {
    return false;
  }
};

export const editarUsuario = async (usuarioEditado) => {
  try {
    const respuesta = await fetch(URLUsuario + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.stringify(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(usuarioEditado),
    });
    return respuesta;
  } catch (error) {
    return false;
  }
};

export const listarUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuario);
    return respuesta;
  } catch (error) {
    return false;
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(URLUsuario + "/" + id, {
      method: "DELETE",
      headers: {
        "x-token": JSON.stringify(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    return false;
  }
};
