import "../styles/contact.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Contact = () => {
  return (
    <div className="contact" data-aos="fade-up">
      <div className="contact-container">
        <h1>
          Contact <span>Us</span>{" "}
        </h1>
      </div>
      <div className="line">
        <p>Email: srishtisrivastava3008@gmail.com</p>
        <p>Slack: PixelDecoder</p>
        <p>Discord: PixelDecoder</p>
      </div>
      <div className="projects">
        <h2>
          Have a question? We're here to help! We will try our best to response
          at the earliest.
        </h2>
        <h2>
          Wanna build projects with me. Visit this website fill the form{" "}
          <a
            href="https://srishtiongit.github.io/Srishti-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Srishti's Portfolio
          </a>
          Or You can directly mail me at the provided email.
        </h2>
      </div>
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
            <Link to="/popular">Popular Cubes</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Contact;
