import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero" data-aos="fade-up">
      <h1>Discover the Stories Behind Every Turn.</h1>
      <button onClick={() => navigate("/about")}>
        Explore the World of Cubes
      </button>
    </div>
  );
};

export default Hero;
