import "../styles/champion.css";
import Featured from "../components/featuredchampion";
import More from "../components/morechampions";
import Famous from "../components/famoussolves";
import Legacy from "../components/legacy";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Champions = () => {
  return (
    <div>
      <div className="champions">
        <h1>
          The Legends of <span>SpeedCubing</span>
        </h1>
      </div>
      <Featured />
      <More />
      <Famous />
      <Legacy />
      <footer className="about-footer">
        <img src={Logo} alt="logo" />
        <h1>CubePedia</h1>

        <ul>
          <li>
            <Link to="/about">About Cube</Link>
          </li>
          <li>
            <Link to="/cubehardware">Cube Hardware</Link>
          </li>
          <li>
            <Link to="/popular">Popular Cubes</Link>
          </li>
          <li>
            <Link to="/algorithm">Algorithm library</Link>
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

export default Champions;
