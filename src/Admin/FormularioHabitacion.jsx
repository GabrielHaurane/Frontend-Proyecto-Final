import { useEffect } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

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

  const onSubmit = ()=>{
    console.log("habitacion editada")
    reset();
  }
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
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
          <Form.Label>Disponibilidad*</Form.Label>
          <Form.Check
            type="checkbox"
            label="Disponible"
            {...register("disponibilidad", {
              required: true,
            })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Entrada*</Form.Label>
          <Form.Control
            type="date"
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
        <Form.Group>
          <Form.Label>Fecha de Salida*</Form.Label>
          <Form.Control
            type="date"
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
