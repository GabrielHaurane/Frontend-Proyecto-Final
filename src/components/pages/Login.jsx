import React from "react";
import { Row, Container, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = ({ setUsuarioLogueado }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = () => {};


  return (
    <section className="container text-center my-5">
      <Container>
        <Row className="justify-content-center">
          <Card>
            <Card.Body>
              <div className="justify-content-center">
                <Card.Title>Iniciar Sesión</Card.Title>
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
                    type="email"
                    placeholder="********"
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
                <div className="justify-content-center d-flex">
                  <Button type="submit" variant="success">
                    Enviar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
