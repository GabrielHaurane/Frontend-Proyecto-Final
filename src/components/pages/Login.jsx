import React, { useState } from "react";
import { Row, Container, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login, registro } from "../../helpers/queries.usuarios.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {
  const [registrarse, setRegistrarse] = useState(false);
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = async (usuario) => {
    try {
      if (registrarse) {
        const respuesta = await registro(usuario);
        const datos = await respuesta.json();

        if (respuesta.status === 200) {
          Swal.fire({
            title: "Registro Exitoso",
            text: `Gracias por unirte a Hotel Code`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: datos.mensaje || "No se pudo completar el registro",
            icon: "error",
          });
        }
      } else {
        const respuesta = await login(usuario);
        const datos = await respuesta.json();

        if (respuesta.status === 200) {
          Swal.fire({
            title: "Usuario Logueado",
            text: `Bienvenido a HotelCode`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: datos.mensaje || "Email o Password incorrecto",
            icon: "error",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        text: registrarse
          ? "No se pudo completar el registro"
          : "Email o Password incorrecto",
        icon: "error",
      });
    }
  };

  const cambiarFormulario = () => {
    setRegistrarse(!registrarse);
    reset();
  };

  return (
    <section className="container text-center my-5">
      <Container>
        <Row className="justify-content-center">
          <Card>
            <Card.Body>
              <div className="justify-content-center">
                <Card.Title>
                  {registrarse ? "Registrarse" : "Iniciar Sesión"}
                </Card.Title>
              </div>
              <Form onSubmit={handleSubmit(onsubmit)}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    className="text-center"
                    type="email"
                    placeholder="Ej: juanperez@email.com"
                    {...register("email", {
                      required: "El  correo electrónico es un dato obligatorio",
                      minLength: {
                        value: 3,
                        message:
                          "El correo electrónico debe tener al menos 3 caracteres",
                      },
                      maxLength: {
                        value: 320,
                        message:
                          "El correo electrónico no debe tener más de 320 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    className="text-center"
                    type="password"
                    placeholder="Ej: 123aA45$"
                    {...register("password", {
                      required: "La contraseña es un campo obligatorio",
                      minLength: {
                        value: 8,
                        message:
                          "La contraseña debe contener al menos 8 caracteres",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "La contraseña no debe contener más de 320 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>
                {registrarse && (
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Repetir Contraseña</Form.Label>
                    <Form.Control
                      className="text-center"
                      type="password"
                      placeholder="Ej: 123aA45$"
                      {...register("confirmarPassword", {
                        required: "La contraseña es un campo obligatorio",
                        minLength: {
                          value: 8,
                          message:
                            "La contraseña debe contener al menos 8 caracteres",
                        },
                        maxLength: {
                          value: 100,
                          message:
                            "La contraseña no debe contener más de 320 caracteres",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.confirmarPassword?.message}
                    </Form.Text>
                  </Form.Group>
                )}

                <div className="justify-content-center d-flex">
                  <Button type="submit" variant="success">
                    {registrarse ? "Registrarse" : "Iniciar Sesion"}
                  </Button>
                </div>
              </Form>
              <div>
                <p onClick={cambiarFormulario}>
                  {registrarse
                    ? "¿Ya tenes cuenta? Inicia sesión aquí"
                    : "¿No tenes cuenta?  Registrate aquí"}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
