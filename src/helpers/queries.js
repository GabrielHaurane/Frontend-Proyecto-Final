const URLHabitacion = import.meta.env.VITE_API_HABITACION;

// Función para buscar habitaciones disponibles
export const buscarHabitacionesDisponibles = async (
  fechaEntrada,
  fechaSalida
) => {
  try {
    const respuesta = await fetch(
      `${URLHabitacion}/catalogo?fechaEntrada=${fechaEntrada}&fechaSalida=${fechaSalida}`
    );
    if (!respuesta.ok) {
      throw new Error("Error al buscar habitaciones");
    }
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return { mensaje: "Error al buscar habitaciones" };
  }
};

// Función para crear una nueva habitación
// export const crearHabitacion = async (habitacion) => {
//   try {
//     const respuesta = await fetch(`${URLHabitacion}/habitacion`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(habitacion),
//     });
//     if (!respuesta.ok) {
//       throw new Error("Error al crear habitación");
//     }
//     const data = await respuesta.json();
//     return data;
//   } catch (error) {
//     console.error("Error en la solicitud:", error.message);
//     return { mensaje: "Error al crear habitación" };
//   }
// };

// Función para obtener el catálogo de habitaciones
export const obtenerCatalogoHabitaciones = async () => {
  try {
    const respuesta = await fetch(`${URLHabitacion}/catalogo`);
    if (!respuesta.ok) {
      throw new Error("Error al obtener el catálogo");
    }
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return { mensaje: "Error al obtener el catálogo de habitaciones" };
  }
};
// Función para listar todas las habitaciones
export const listarHabitacionesAdmin = async () => {
  try {
    const respuesta = await fetch(`${URLHabitacion}/habitacion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    if (!respuesta.ok) {
      throw new Error("Error al listar habitaciones");
    }
    return respuesta;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return { mensaje: "Error al listar habitaciones" };
  }
};

// Función para crear una nueva habitación (solo administrador)
export const crearHabitacionAdmin = async (habitacion) => {
  try {
    const respuesta = await fetch(`${URLHabitacion}/habitacion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem('userKey')).token
      },
      body: JSON.stringify(habitacion),
    });
    if (!respuesta.ok) {
      throw new Error("Error al crear la habitación");
    }
    return respuesta
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return { mensaje: "Error al crear la habitación" };
  }
};

// Función para editar una habitación existente (solo administrador)
export const editarHabitacionAdmin = async (
  idHabitacion,
  habitacionActualizada
) => {
  try {
    const respuesta = await fetch(
      `${URLHabitacion}/habitacion/${idHabitacion}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-token":  JSON.parse(sessionStorage.getItem("userKey")).token,

        },
        body: JSON.stringify(habitacionActualizada),
      }
    );
    if (!respuesta.ok) {
      throw new Error("Error al editar la habitación");
    }
    return respuesta
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return { mensaje: "Error al editar la habitación" };
  }
};

// Función para eliminar una habitación (solo administrador)
export const eliminarHabitacionAdmin = async (idHabitacion) => {
  try {
    const respuesta = await fetch(
      `${URLHabitacion}/habitacion/${idHabitacion}`,
      {
        method: "DELETE",
        headers: {
          "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
        },
      }
    );
    if (!respuesta.ok) {
      throw new Error("Error al eliminar la habitación");
    }
    return respuesta;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return { mensaje: "Error al eliminar la habitación" };
  }
};

// Función para obtener los detalles de una habitación específica (solo administrador)
export const obtenerHabitacionAdmin = async (idHabitacion) => {
  try {
    const respuesta = await fetch(
      `${URLHabitacion}/habitacion/${idHabitacion}`,
    );
    if (!respuesta.ok) {
      throw new Error("Error al obtener los detalles de la habitación");
    }
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return { mensaje: "Error al obtener los detalles de la habitación" };
  }
};

export const listadoHabitacionesDisponibles = async (req,res) =>{
  try {
    const respuesta = await fetch(`${URLHabitacion}/disponibles`,
      {
        headers:{
          "x-token": JSON.parse(sessionStorage.getItem("userKey")).token
        }
      }
    )
    if (!respuesta.ok) {
      throw new Error("Error al obtener los detalles de la habitación");
    }
    const data = await respuesta.json()
    return data;
  } catch (error) {
    console.error(error)
    return false;
  }
}