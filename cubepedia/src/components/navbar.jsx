import "../styles/navbar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" data-aos="fade-up">
      <img src={Logo} alt="logo" className="nav-logo" />
      <h1 className="nav-title">CubePedia</h1>

      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Cube</Link>
        </li>
        <li className="nav-item">
          <Link to="/champions">Champions</Link>
        </li>
        <li className="nav-item">
          <Link to="/hardware">Cube Hardware</Link>
        </li>
        <li className="nav-item">
          <Link to="/popular">Popular Cubes</Link>
        </li>
        <li className="nav-item">
          <Link to="/library">Algorithm library</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
