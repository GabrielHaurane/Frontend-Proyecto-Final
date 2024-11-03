import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TiempoToken = ({setUsuarioLogueado}) => {

  const navigate = useNavigate();

  useEffect(() => {
    const controlarTiempo = () => {
      const token = sessionStorage.getItem("token");
      const expiracionToken = sessionStorage.getItem("expiracionToken");
      const tiempoActual = Date.now();

      if (token && expiracionToken) {
        const tiempoExpiracion = parseInt(expiracionToken);
        if (tiempoActual > tiempoExpiracion) {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("expiracionToken");
          sessionStorage.removeItem("userKey");
          setUsuarioLogueado("");
          Swal.fire({
            title: "Sesión Expirada",
            text: "Tu sesión expiró. Por favor, inicia sesión nuevamente.",
            icon: "warning",
            confirmButtonText: "Iniciá Sesión Nuevamente",
          }).then(() => {
            
            navigate("/login");
          });
        }
      }
    };

    const intervalId = setInterval(controlarTiempo, 1000); 
    return () => clearInterval(intervalId); 
  }, [navigate, setUsuarioLogueado]);

  return null; 
};

export default TiempoToken;
