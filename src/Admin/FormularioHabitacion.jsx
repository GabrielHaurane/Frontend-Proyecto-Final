import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  crearHabitacionAdmin,
  editarHabitacionAdmin,
  obtenerHabitacionAdmin,
} from "../helpers/queries.js";

const FormularioHabitacion = ({ creandoHabitacion, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (!creandoHabitacion) {
      cargarHabitacion();
    }
  }, []);

  const cargarHabitacion = async () => {
    const habitacionEncontrada = await obtenerHabitacionAdmin(id);
    if (habitacionEncontrada) {
      setValue("tipoHabitacion", habitacionEncontrada.tipoHabitacion);
      setValue("capacidad", habitacionEncontrada.capacidad);
      setValue("precio", habitacionEncontrada.precio);
      setValue("servicios", habitacionEncontrada.servicios);
      setValue("descripcion_breve", habitacionEncontrada.descripcion_breve);
      setValue("descripcion_amplia", habitacionEncontrada.descripcion_amplia);
      setValue("tamanio", habitacionEncontrada.tamanio);
      setValue("imagen", habitacionEncontrada.imagen);
      setValue("disponibilidad", habitacionEncontrada.disponibilidad);
         const fechaEntradaFormateada = new Date(
           habitacionEncontrada.fechaEntrada
         )
           .toISOString()
           .slice(0, 16); 
           
         const fechaSalidaFormateada = new Date(
           habitacionEncontrada.fechaSalida
         )
           .toISOString()
           .slice(0, 16);

         setValue("fechaEntrada", fechaEntradaFormateada);
         setValue("fechaSalida", fechaSalidaFormateada);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo cargar la habitación. Inténtalo más tarde.",
        icon: "error",
      });
    }
  };

  const onSubmit = async (habitacion) => {
    if (creandoHabitacion) {
      const respuesta = await crearHabitacionAdmin(habitacion);
      console.log(respuesta)
      if (respuesta.status === 201) {
        reset();
        Swal.fire({
          title: "Habitación creada",
          text: `La habitación fue creada correctamente`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: `No se pudo cargar la ${habitacion.tipoHabitacion}. Inténtalo más tarde.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await editarHabitacionAdmin(id, habitacion);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Habitación editada",
          text: `La habitación fue editada correctamente`,
          icon: "success",
        });
        navegacion("/administrador");
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo editar la habitación. Inténtalo más tarde.",
          icon: "error",
        });
      }
    }
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="forTipoHabitacion">
          <Form.Label>Tipo de Habitación</Form.Label>
          <Form.Select
            {...register("tipoHabitacion", {
              required: "Seleccion un tipo de habitacion",
            })}
          >
            <option value="">Selecciona una opción</option>
            <option value="Habitacion Individual">Habitacion Individual</option>
            <option value="Habitacion Doble">Habitacion Doble</option>
            <option value="Habitacion Familiar">Habitacion Familiar</option>
            <option value="Suite Junior">Suite Junior</option>
            <option value="Suite Precidencial">Suite Presidencial</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.tipoHabitacion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Capacidad</Form.Label>
          <Form.Control
            type="number"
            {...register("capacidad", {
              required: "La capacidad es un dato obligatorio",
              min: { value: 1, message: "La capacidad mínima es de 1 persona" },
              max: {
                value: 6,
                message: "La capacidad máxima es de 6 personas",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.capacidad?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio por noche ($)*</Form.Label>
          <Form.Control
            type="number"
            {...register("precio", {
              min: { value: 100, message: "El precio minimo es 100 usd" },
              max: { value: 500, message: "El precio máximo es de 500 usd" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Servicios*</Form.Label>
          <Form.Control
            type="text"
            {...register("servicios", {
              required: "El servicio es un dato obligatorio",
              minLength: {
                value: 10,
                message: "Debe ingresar máximo 10 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Debe ingresar como máximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.servicios?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion Breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Habitacion espaciosa con vista al mar.."
            {...register("descripcion_breve", {
              required: "La descripcion breve es un dato obligatorio",
              minLength: {
                value: 20,
                message: "Debe ingresar máximo 20 caracteres",
              },
              maxLength: {
                value: 300,
                message: "Debe ingresar como máximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion Amplia*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es un dato obligatorio",
              minLength: {
                value: 30,
                message: "Debe ingresar máximo 30 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "Debe ingresar como máximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tamaño de la Habitación (m²)*</Form.Label>
          <Form.Control
            type="number"
            {...register("tamanio", {
              required: "El tamaño es un dato obligatorio",
              min: {
                value: 10,
                message: "Tamaño mínimo  10 m²",
              },
              max: {
                value: 100,
                message: "Tamaño máximo  100 m²",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.tamanio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Url de imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://wwww.ejemploimagen.com/habitacion.jpg"
            {...register("imagen", {
              required: "La URL de la imagen es un dato obligatorio",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message:
                  "Debe ingresar una url de imagen valida, los formatos admitivos son (jpg|jpeg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.tamanio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group  className="mb-3">
          <Form.Select
            type="checkbox"
            label="Disponible"
            {...register("disponibilidad", {
              required: true,
            })}
          >
          <option value="">Disponibilidad</option>
          <option value="true">Si</option>
          <option value="false">No</option>
          </Form.Select>
        </Form.Group>
        <Form.Group  className="mb-3">
          <Form.Label>Fecha de Entrada*</Form.Label>
          <Form.Control
            type="datetime-local"
            {...register("fechaEntrada", {
              required: "La fecha de entrada es un dato obligatorio",
              validate: {
                isFuture: (value) =>
                  new Date(value) > new Date() || "La fecha debe ser futura",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.fechaEntrada?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group   className="mb-3">
          <Form.Label>Fecha de Salida*</Form.Label>
          <Form.Control
            type="datetime-local"
            {...register("fechaSalida", {
              required: "La fecha de salida es un dato obligatorio",
              validate: {
                isFuture: (value) =>
                  new Date(value) > new Date() || "La fecha debe ser futura",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.fechaSalida?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          {creandoHabitacion ? "Crear Habitación" : "Editar Habitación"}
        </Button>
      </Form>
    </section>
  );
};

export default FormularioHabitacion;
