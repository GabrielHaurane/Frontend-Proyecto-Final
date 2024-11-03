import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TiempoToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const controlarTiempo = () => {
      const token = sessionStorage.getItem("token");
      const expiracionToken = sessionStorage.getItem("expiracionToken");
      const tiempoActual = Date.now();

      if (token && expiracionToken) {
        const tiempoExpiracion = parseInt(expiracionToken); 
        const tiempoAntesExpiracion = tiempoExpiracion - tiempoActual;
        if (tiempoAntesExpiracion < 300000) {
          Swal.fire({
            title: "Sesión Expirada",
            text: "Tu sesión expiró. Por favor, inicia sesión nuevamente.",
            icon: "warning",
            confirmButtonText: "Iniciá Sesión Nuevamente",
          }).then(() => {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("expiracionToken");
            navigate("/login");
          });
        }
      }
    };

    const intervalId = setInterval(controlarTiempo, 60000); 

    
    return () => clearInterval(intervalId);
  }, [navigate]);

  return null; 
};

export default TiempoToken;
