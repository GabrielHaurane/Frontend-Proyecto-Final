import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo-hotelcode.jpg'
const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
    const logout =()=>{
        sessionStorage.removeItem('userKey')
        setUsuarioLogueado('')
        navegacion('/')
      }
      const navegacion = useNavigate()
    return (
        <>
        <Navbar expand="lg" className="backC">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            alt="logo Hotel code"
            className="img-fluid"
            width={100}
          />
        </Navbar.Brand>
        <NavLink end className='nav-link fs-2 text-white text-decoration-none' to="/">Hotel Code</NavLink>
        <Navbar.Toggle className=" bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto w-100 d-flex justify-content-end">
            <NavLink end className='nav-link text-white d-flex align-self-center text-center' to='/'>Inicio</NavLink>
            <NavLink end className='nav-link text-white d-flex align-self-center text-center' to='/quienessomos'>Quienes somos</NavLink>
            <NavLink end className='nav-link text-white d-flex align-self-center text-center' to='/contacto'>Contacto</NavLink>
            <NavLink end className='nav-link text-white d-flex align-self-center text-center' to='/galeria'>Galeria de imagenes</NavLink>
            <NavLink end className='nav-link text-white d-flex align-self-center text-center' to='/catalogo'>Catalogo de habitaciones</NavLink>
            <NavLink end className='nav-link text-white d-flex align-self-center text-center' to='/administrador'>Administrador</NavLink>
            <button className="nav-link text-white d-flex align-self-center text-center" onClick={logout}>logout</button>
            {/* {
                usuarioLogueado!==''?(
                    <>
                </>
              ): */}
              {/* <NavLink end className='nav-link text-white d-flex flex-wrap align-self-center text-center' to='/login'>Login</NavLink> */}
            {/* } */}
            <NavLink end className='nav-link text-white d-flex align-self-center text-center' to='/ajustes'>Ajustes</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Menu;