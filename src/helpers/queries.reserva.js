const URLReserva = import.meta.env.VITE_API_RESERVA 
const listarReservas = async () => {
    try {
      const response = await fetch(URLReserva);
      if (!response.ok) throw new Error('Error al listar las reservas');
      const data = await response.json();
      console.log('Reservas:', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const obtenerReserva = async (id) => {
    try {
      const response = await fetch(URLReserva+`/${id}`);
      if (!response.ok) throw new Error('Error al obtener la reserva');
      const data = await response.json();
      console.log('Reserva obtenida:', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const crearReserva = async (nuevaReserva) => {
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
      console.log('Reserva creada:', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const borrarReserva = async (id) => {
    try {
      const response = await fetch(URLReserva+`/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al borrar la reserva');
      
    } catch (error) {
      console.error(error);
    }
  };