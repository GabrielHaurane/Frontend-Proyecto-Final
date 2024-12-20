const URLReserva = import.meta.env.VITE_API_RESERVA;
const URLReservasAdmin = import.meta.env.VITE_API_RESERVA_ADMIN;
export const listarReservas = async (email) => {
  try {
    const response = await fetch(`${URLReserva}?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    if (!response.ok) throw new Error("Error al listar las reservas");
    const data = await response.json();
    return Array.isArray(data) ? data : [];
    
  } catch (error) {
    console.error(error);
  }
};
export const obtenerReserva = async (id) => {
  try {
    const response = await fetch(URLReserva + `/${id}`);
    if (!response.ok) throw new Error("Error al obtener la reserva");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
export const crearReserva = async (nuevaReserva) => {
  try {
    const response = await fetch(URLReserva, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaReserva),
    });
    if (!response.ok) throw new Error("Error al crear la reserva");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
export const borrarReserva = async (id) => {
  try {
    const response = await fetch(URLReserva + `/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    if (!response.ok) throw new Error("Error al borrar la reserva");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const listarReservasAdmin = async () => {
  try {
    const respuesta = await fetch(URLReservasAdmin,{
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      }
    });
    if (!respuesta.ok) throw new Error("Error al listar las reservas");
    const data =  await respuesta.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(error);
  }
};
