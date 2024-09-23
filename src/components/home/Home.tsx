import React from "react";
import { LogoComponent } from "./LogoComponent/LogoComponent";
import { LinksContainer } from "./LinksContainer/LinksContainer";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container-fluid homeContainer">
      <LogoComponent />
      <LinksContainer />
    </div>
  );
};
