import './App.css'
import Menu from './components/common/Menu.jsx'
import Footer from './components/common/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetalleHabitacion from './components/pages/DetalleHabitacion.jsx'
import Administrador from './components/pages/Administrador.jsx'
import Login from './components/pages/Login.jsx'
import Inicio from './components/pages/Inicio.jsx'
import Ajustes from './components/pages/Ajustes.jsx'
import Catalogo from './components/pages/Catalogo.jsx'
import Contacto from './components/pages/Contacto.jsx'
import Galeria from './components/pages/Galeria.jsx'
import Quienes from './components/pages/Quienes.jsx'
import Error404 from './components/pages/Error404.jsx'
import RutasAdmin from './components/routes/RutasAdmin.jsx'
import RutasProtegidas from './components/routes/RutasProtegidas.jsx'
import { useState } from 'react'
function App() {
  const usuario = JSON.parse(sessionStorage.getItem('userKey')) || '';
  const [usuarioLogueado, setUsuarioLogeado] = useState(usuario)

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>} ></Route>
        <Route exact path='/quienessomos'element={<Quienes></Quienes>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='/galeria' element={<Galeria></Galeria>}></Route>
        <Route exact path='/catalogo' element={<Catalogo></Catalogo>}></Route>
        <Route exact path='/detallehabitacion/:id' element={<DetalleHabitacion></DetalleHabitacion>}></Route>
        <Route exact path='/login' element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}></Route>
        <Route exact path='/administrador/*' element={
          <RutasProtegidas>
            <RutasAdmin></RutasAdmin>
          </RutasProtegidas>
        }></Route>
        <Route exact path='/ajustes' element={<Ajustes></Ajustes>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
