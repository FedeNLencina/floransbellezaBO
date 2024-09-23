import React from "react";
import Logo from "../../../assets/logo.svg";
import "./LogoComponent.css";

export const LogoComponent = () => {
  return (
    <div className="container-fluid bg-white d-flex justify-content-center align-items-center">
      <img className="imageLogo" src={Logo}></img>
    </div>
  );
};
