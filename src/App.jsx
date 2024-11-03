import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Menu from './components/common/Menu.jsx'
import Footer from './components/common/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetalleHabitacion from './components/pages/DetalleHabitacion.jsx'
import Administrador from './components/pages/Administrador.jsx'
import Login from './components/pages/Login.jsx'
import Inicio from './components/pages/Inicio.jsx'
import Catalogo from './components/pages/Catalogo.jsx'
import Contacto from './components/pages/Contacto.jsx'
import Galeria from './components/pages/Galeria.jsx'
import Quienes from './components/pages/Quienes.jsx'
import Error404 from './components/pages/Error404.jsx'
import RutasAdmin from './components/routes/RutasAdmin.jsx'
import RutasProtegidas from './components/routes/RutasProtegidas.jsx'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Reservas from './components/pages/Reservas.jsx';
import TiempoToken from './components/TiempoToken/TiempoToken.jsx';

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('userKey')) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)



  return (
    <>
      <BrowserRouter>
      <TiempoToken setUsuarioLogueado={setUsuarioLogueado}/>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path='/quienessomos'element={<Quienes></Quienes>}></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/galeria" element={<Galeria></Galeria>}></Route>
          <Route exact path="/catalogo" element={<Catalogo></Catalogo>}></Route>
          <Route exact path="/reservas"  element={<Reservas email={usuarioLogueado.email} token={usuarioLogueado.token}></Reservas>}></Route>
          <Route
            exact
            path="/detallehabitacion/:id"
            element={<DetalleHabitacion></DetalleHabitacion>}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin email={usuarioLogueado.email} token={usuarioLogueado.token}></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App
