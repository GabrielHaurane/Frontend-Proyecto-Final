import Carousel from "react-bootstrap/Carousel";
import { primeraImg, segundaImg, terceraImg } from "../assets/imagenes.js";
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
    </div>
  );
};

export default Inicio;
