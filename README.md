# Hotel Code - Frontend

Bienvenido al repositorio del frontend de **Hotel Code**, un sistema de gestión para hoteles que permite a los usuarios buscar habitaciones disponibles, realizar reservas, y gestionar su estadía de manera cómoda y eficiente.

## 🌐 Demo en Producción

Puedes acceder a la versión en producción en [https://hotel-code.netlify.app](https://hotel-code.netlify.app).

## 👥 Integrantes

- [**Haurane Gabriel Alejandro**](https://github.com/GabrielHaurane)
- [**Brito Augusto Patricio**](https://github.com/BritoAugusto)

## 🚀 Características

- **Búsqueda de habitaciones**: Filtra habitaciones según disponibilidad y otros criterios.
- **Reservas**: Completa reservas especificando fechas de entrada y salida.
- **Gestión de Usuarios**: Registro e inicio de sesión para clientes.
- **Interfaz Amigable**: Diseño atractivo y responsivo para una excelente experiencia de usuario.
- **Notificaciones de éxito y error**: Feedback visual con SweetAlert2.

## 🛠️ Tecnologías Utilizadas

- **React + Vite**: Desarrollo de la interfaz del usuario.
- **JavaScript (JS)**: Lógica del frontend.
- **HTML5 y CSS3**: Estructura y estilos básicos.
- **Bootstrap**: Diseño responsivo y componentes predefinidos.
- **SweetAlert2**: Notificaciones interactivas y personalizadas para mejorar la experiencia del usuario.

## 📸 Captura de Pantalla

![Captura de HotelCode](https://github.com/user-attachments/assets/4daab127-8699-47ac-b418-fe02a37d5d9f)

## 📂 Instalación y Ejecución Local

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Pasos de Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/GabrielHaurane/Frontend-Proyecto-Final.git
2. Accede al directorio del proyecto:
   cd Frontend-Proyecto-Final
3. Instala las dependencias:
   npm install
4. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las configuraciones necesarias (por ejemplo, la URL de la API del backend).
5. Inicia el proyecto en modo desarrollo:
   npm run dev
El proyecto debería estar corriendo en http://localhost:5173.

## 📖 Uso del Proyecto
1. Inicio de Sesión/Registro: Los usuarios pueden crear una cuenta y autenticarse en el sistema.
2. Búsqueda de Habitaciones: En el inicio, los usuarios pueden ver las habitaciones disponibles y aplicar filtros según sus preferencias.
3. Reserva de Habitaciones: Selecciona una habitación y especifica las fechas para realizar una reserva.
4. Notificaciones: Al completar acciones como reserva o inicio de sesión, el sistema muestra notificaciones visuales para confirmar la operación.
## 📄 Variables de Entorno
Asegúrate de configurar las siguientes variables en el archivo .env:
VITE_API_HABITACION: URL del backend para realizar las solicitudes de las habitaciones y reservas.
Ejemplo:
VITE_API_HABITACION=http://localhost:4000/api
