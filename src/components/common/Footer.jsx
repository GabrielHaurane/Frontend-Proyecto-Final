import React from "react";
import logo from "../assets/logo-hotelcode.jpg";

import { useRef } from "react";



const Footer = () => {
  return (
    <div className=" backC py-4 d-flex align-item-center">
      <div className="ms-3 d-flex">
        <div className=" d-flex justify-content-start align-self-center">
        <img
          src={logo}
          alt="logo Hotel code"
          className="img-fluid "
          width={65}
        />
        </div>
        <div className="d-flex flex-column ms-2">
          
          <p className="text-white m-0 text-break">Trabaja con nosotros:</p>
          <p className="text-white m-0 text-break">Tel: +54 381 2584026</p>
          <p className="text-white m-0 text-break">Email: hotelcod3@gmail.com</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
