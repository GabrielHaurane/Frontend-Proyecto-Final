import React from 'react';
import { Container } from 'react-bootstrap';
import { galeriaIMG1, galeriaIMG10, galeriaIMG11, galeriaIMG2, galeriaIMG3, galeriaIMG4, galeriaIMG5, galeriaIMG6, galeriaIMG7, galeriaIMG8, galeriaIMG9, hotelImg } from '../assets/imagenes';

const Galeria = () => {
    return (
        <Container>
            <h1 className='text-center my-3'>Nuestra Galeria</h1>
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
    );
};

export default Galeria;