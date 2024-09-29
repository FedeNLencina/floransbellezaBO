import { Link } from "react-router-dom";
import "./LinksContainer.css";

export const LinksContainer = () => {
  return (
    <div className="conatiner-fluid d-flex justify-content-center align-items-center linksMainContainer">
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <Link to={"/precios"} className="linkBO">
            Precios
          </Link>
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          <Link to={"/servicios"} className="linkBO">
            Servicios
          </Link>
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          <Link to={"/serviciosHome"} className="linkBO">
            Servicios Home
          </Link>
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          <Link to={"/imagenesGaleriaHome"} className="linkBO">
            {" "}
            Imagenes galleria del home
          </Link>
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          <Link to={"/imagenesGaleriaConocenos"} className="linkBO">
            Imagenes galleria de conocenos
          </Link>
        </button>
      </div>
    </div>
  );
};
