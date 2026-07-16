import PopularCubes from "../components/popularcubes";
import "../styles/popular.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Popular = () => {
  return (
    <div>
      <div className="popular">
        <h1>
          Popular <span>Cubes</span>
        </h1>
      </div>
      <PopularCubes />
      <footer className="about-footer">
        <img src={Logo} alt="logo" />
        <h1>CubePedia</h1>

        <ul>
          <li>
            <Link to="/about">About Cube</Link>
          </li>
          <li>
            <Link to="/champions">Champions</Link>
          </li>
          <li>
            <Link to="/cubehardware">Cube Hardware</Link>
          </li>

          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Popular;
