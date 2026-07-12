import "../styles/about.css";
import ErnoRubik from "../components/ernorubik";
import Story from "../components/story";
import WhySpecial from "../components/whyspecial";
import Anatomy from "../components/anatomy";
import DidYouKnow from "../components/diduknow";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const AboutCube = () => {
  return (
    <div className="cube-continer">
      <div className="aboutcube">
        <h1>
          About <span>Rubik's Cube</span>
        </h1>
      </div>
      <ErnoRubik />
      <Story />
      <WhySpecial />
      <Anatomy />
      <DidYouKnow />
      <footer className="about-footer">
        <img src={Logo} alt="logo" />
        <h1>CubePedia</h1>

        <ul>
          <li>
            <Link to="/champions">Champions</Link>
          </li>
          <li>
            <Link to="/hardware">Cube Hardware</Link>
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

export default AboutCube;
