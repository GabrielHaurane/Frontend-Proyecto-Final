import React from "react";
import logo from "../assets/logo-hotelcode.jpg";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="backC py-3 d-flex justify-content-center justify-content-md-around">
      <div className="d-flex flex-column flex-md-row justify-content-around">
        <div className="col-12 col-sm-6 col-md-4">
        <img
          src={logo}
          alt="logo Hotel code"
          className="img-fluid"
          width={100}
        />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h3 className="text-white fs-5">Quieres trabajar con nosotros:</h3>
          <div className="d-flex flex-column">
          <p className="text-white col-12">Tel: +54 381 2584026</p>
          <p className="text-white col-12">Email: HotelCode@gmail.com</p>
          </div>
          <h3 className="text-white fs-5">Te estaremos respondiendo lo mas pronto posible</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
