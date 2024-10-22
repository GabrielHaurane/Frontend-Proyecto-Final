import Carousel from "react-bootstrap/Carousel";
import {
  hotelImg,
  primeraImg,
  segundaImg,
  terceraImg,
} from "../assets/imagenes.js";
import FormularioDisponibilidad from "./Habitaciones/FormularioDisponibilidad.jsx";

const Inicio = () => {
  return (
    <div className="mainSection">
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={primeraImg}
            alt="First slide"
            width={800}
            height={700}
          />
          <Carousel.Caption className="caption-centered w-100">
            <hr className="line" />
            <h2 className="tama1 mt-4">Bienvenido al Hotel Code</h2>
            <div className="mb-4">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <hr className="line" />
            <p className="text-white fs-3">Comodidad, Confort, Relajación</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={segundaImg}
            alt="Second slide"
            width={800}
            height={700}
          />
          <Carousel.Caption className="caption-centered w-100">
            <hr className="line" />
            <h3 className="tama1">Disfruta tu instrancia</h3>
            <p className="text-white fs-3">En conjunto a tu familia</p>
            <hr className="line" />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={terceraImg}
            alt="Third slide"
            width={800}
            height={700}
          />
          <Carousel.Caption className="caption-centered w-100">
            <hr className="line" />
            <h3 className="tama1">Hotel Code</h3>
            <div className="mb-4">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <hr className="line" />
            <p className="text-white fs-3">
              El mejor hotel para tus vacaciones
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="py-3 backC">
        {<FormularioDisponibilidad></FormularioDisponibilidad>}
      </div>
      <div className="text-center py-2 Acerca text-white">
        <h1>Acerca del Hotel</h1>
      </div>
      <section className="d-flex flex-wrap flex-column flex-lg-row text-white backS p-3">
        <article className="pe-3 col-12 col-lg-6">
          <p className="fs-5">
            El Hotel Code fue fundado en el año 1995 por unos visionarios
            emprendedores y apasionados de la tecnología, Gabriel Haurane y
            Augusto Patricio Brito, quien siempre había soñado con fusionar lo mejor de
            la hospitalidad tradicional con los avances tecnológicos del futuro.
            Ubicado en una ciudad cosmopolita y vibrante, el hotel abrió sus
            puertas como una joya de diseño moderno, con una promesa clara:
            ofrecer una experiencia de lujo sofisticada con la mayor innovación
            tecnológica disponible en la época.
          </p>
          <p className="fs-5">
            Desde sus inicios, el Hotel Code rompió moldes al ser uno de los
            primeros hoteles en implementar sistemas de domótica avanzada en
            cada una de sus habitaciones, permitiendo a los huéspedes controlar
            las luces, cortinas, y temperatura mediante paneles digitales.
            Además, su equipo de desarrollo interno creó una plataforma
            exclusiva que permitía a los clientes realizar check-ins
            automatizados y gestionar todas sus necesidades durante su estancia
            a través de una app propia, algo revolucionario para la década de
            los 90.
          </p>
          <p className="fs-5">
            Con los años, el hotel se consolidó como uno de los más prestigiosos
            de la región, atrayendo a empresarios, artistas, y personalidades
            del mundo de la tecnología y las startups. El Hotel Code no solo
            ofrecía una estancia de lujo, sino que también se convirtió en un
            centro de innovación, albergando conferencias tecnológicas,
            lanzamientos de productos, y eventos exclusivos para los líderes del
            sector.
          </p>
        </article>
        <div className="col-12 col-lg-6 d-flex align-self-center">
          <img
            className="w-100"
            src={hotelImg}
            alt="imagen del hotel"
            
            height={300}
          />
        </div>
      </section>
      <div className="d-flex justify-content-center py-3 backS">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.106067952452!2d-65.20974728807246!3d-26.836578489931565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1729326016435!5m2!1ses-419!2sar"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Inicio;
