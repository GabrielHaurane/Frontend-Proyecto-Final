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
        const tiempoExpiracion = parseInt(expiracionToken); // Convertir a número
        const tiempoAntesExpiracion = tiempoExpiracion - tiempoActual;

        if (tiempoAntesExpiracion < 300000) {
          Swal.fire({
            title: "Sesión Expirada",
            text: "Tu sesión está a punto de expirar. Por favor, inicia sesión nuevamente.",
            icon: "warning",
            confirmButtonText: "Ir a Inicio de Sesión",
          }).then(() => {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("expiracionToken");
            navigate("/login");
          });
        }
      }
    };

    const intervalId = setInterval(controlarTiempo, 60000); // Llama a controlarTiempo cada minuto

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [navigate]);

  return null; // Este componente no necesita renderizar nada
};

export default TiempoToken;
