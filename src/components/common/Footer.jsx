import React from "react";
import logo from "../assets/logo-hotelcode.jpg";

import { useRef } from "react";



const Footer = () => {
  return (
    <div className=" backC py-3 d-flex align-item-center">
      <div className="mx-4 d-flex">
        <div className="col-3 d-flex justify-content-start align-self-center">
        <img
          src={logo}
          alt="logo Hotel code"
          className="img-fluid "
          width={65}
        />
        </div>
        <div className="col-10 d-flex flex-column ">
          
          <p className="text-white m-0 col-12">Trabaja con nosotros:</p>
          <p className="text-white m-0 col-12">Tel: +54 381 2584026</p>
          <p className="text-white m-0 col-12">Email: hotelcod3@gmail.com</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
