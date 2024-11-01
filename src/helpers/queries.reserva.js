const URLReserva = import.meta.env.VITE_API_RESERVA 
export const listarReservas = async () => {
    try {
      const response = await fetch(URLReserva);
      if (!response.ok) throw new Error('Error al listar las reservas');
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  export const obtenerReserva = async (id) => {
    try {
      const response = await fetch(URLReserva+`/${id}`);
      if (!response.ok) throw new Error('Error al obtener la reserva');
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  export const crearReserva = async (nuevaReserva) => {
    try {
      const response = await fetch(URLReserva, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaReserva),
      });
      if (!response.ok) throw new Error('Error al crear la reserva');
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  export const borrarReserva = async (id) => {
    try {
      const response = await fetch(URLReserva+`/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al borrar la reserva');
      
    } catch (error) {
      console.error(error);
    }
  };