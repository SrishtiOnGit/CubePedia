import cube from "../assets/cube.png";
import "../styles/cubepedia.css";

const CubePedia = () => {
  return (
    <div className="cubepedia">
      <div className="cubepedia-content">
        <h1>What is CubePedia ?</h1>

        <p>
          CubePedia is a digital encyclopedia dedicated to the world of Rubik's
          Cubes and speedcubing. Explore the history of iconic puzzles, discover
          the stories behind famous algorithms, learn about world champions, and
          dive into the hardware that shaped modern cubing—all in one place.
        </p>
      </div>
      <img src={cube} alt="cube" />
    </div>
  );
};

export default CubePedia;
