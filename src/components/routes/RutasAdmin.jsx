import FormularioHabitacion from "../../Admin/FormularioHabitacion.jsx";
import Administrador from "../pages/Administrador.jsx";
import { Route, Routes } from "react-router-dom";

const RutasAdmin = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador></Administrador>}></Route>
      <Route
        exact
        path="/crear"
        element={
          <FormularioHabitacion
            titulo="Nueva Habitación"
            creandoHabitacion={true}
          ></FormularioHabitacion>
        }
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={
          <FormularioHabitacion
            titulo="Editar Habitación"
            creandoHabitacion={false}
          ></FormularioHabitacion>
        }
      ></Route>
    </Routes>
  );
};

export default RutasAdmin;
