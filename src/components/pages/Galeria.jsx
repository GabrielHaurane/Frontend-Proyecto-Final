import React from 'react';
import { Container } from 'react-bootstrap';
import { galeriaIMG1, galeriaIMG10, galeriaIMG11, galeriaIMG2, galeriaIMG3, galeriaIMG4, galeriaIMG5, galeriaIMG6, galeriaIMG7, galeriaIMG8, galeriaIMG9, hotelImg } from '../assets/imagenes';

const Galeria = () => {
    return (
      <div className='backQS'>
        
        <Container>
            <h1 className='text-center my-3'>Nuestros Servicios</h1>
            <section className='d-flex flex-column flex-md-row justify-content-evenly'>
              <div>
              <p><i className="bi bi-dot fs-5"></i>Desayuno buffet americano</p>
              <p><i className="bi bi-dot fs-5"></i>Spa</p>
              <p><i className="bi bi-dot fs-5"></i>Solarium</p>
              <p><i className="bi bi-dot fs-5"></i>Room Service</p>
              </div>
              <div>
              <p><i className="bi bi-dot fs-5"></i>Restaurant Nélida</p>
              <p><i className="bi bi-dot fs-5"></i>Parking</p>
              <p><i className="bi bi-dot fs-5"></i>Gimnasio</p>
              <p><i className="bi bi-dot fs-5"></i>WiFi sin cargo</p>
              </div>
            </section>
            <section className='d-flex flex-wrap justify-content-center'>
            <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={hotelImg}
            alt="imagen del hotel"
            width={400}
            height={200}
            />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG1}
            alt="imagen del hotel"
            width={400}
            height={200}
          />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG2}
            alt="imagen del hotel"
            width={400}
            height={200}
          />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG3}
            alt="imagen del hotel"
            width={400}
            height={200}
            />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG4}
            alt="imagen del hotel"
            width={400}
            height={200}
            />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG5}
            alt="imagen del hotel"
            width={400}
            height={200}
            />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG6}
            alt="imagen del hotel"
            width={400}
            height={200}
          />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG7}
            alt="imagen del hotel"
            width={400}
            height={200}
          />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG8}
            alt="imagen del hotel"
            width={400}
            height={200}
            />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG9}
            alt="imagen del hotel"
            width={400}
            height={200}
          />
            <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG10}
            alt="imagen del hotel"
            width={400}
            height={200}
          />
          <img
            className="col-12 col-md-4 col-lg-3 border border-2 border-success-subtle m-2 rounded"
            src={galeriaIMG11}
            alt="imagen del hotel"
            width={400}
            height={200}
          />
            </section>
        </Container>
            </div>
    );
};

export default Galeria;