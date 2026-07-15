import Hardware from "../components/hardware";
import "../styles/cubehardware.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const CubeHardware = () => {
  return (
    <div>
      <div className="cubehardware">
        <h1>Cube Hardware</h1>
      </div>
      <Hardware />
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
            <Link to="/popular">Popular Cubes</Link>
          </li>
          <li>
            <Link to="/library">Algorithm library</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default CubeHardware;
