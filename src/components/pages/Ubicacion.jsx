import { Container } from "react-bootstrap";

const Ubicacion = () => {
    return (
        <div className='d-flex flex-column flex-wrap align-content-center backQ flex-grow-1 h-100'>
            <Container className="h-100">
            <h1 className='text-center mt-3'>Nuestra Ubicación</h1>
            <p className='text-center'>San Miguel de Tucuman, Tucuman, Argentina</p>
            <div className='text-center mb-3 w-100 h-100'>
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.106067952452!2d-65.20974728807246!3d-26.836578489931565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1729326016435!5m2!1ses-419!2sar"
          height="600"
          className="border-0 w-100"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
            </div>
            </Container>
        </div>
    );
};

export default Ubicacion;