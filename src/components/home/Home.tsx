import { LogoComponent } from "../LogoComponent/LogoComponent";
import { LinksContainer } from "./LinksContainer/LinksContainer";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container-fluid homeContainer">
      <LinksContainer />
    </div>
  );
};
