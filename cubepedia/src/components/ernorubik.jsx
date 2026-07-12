import "../styles/ernorubik.css";
import rubik from "../assets/cube.png";

const ErnoRubik = () => {
  return (
    <div className="rubik" data-aos="fade-up">
      <div className="rubik-text">
        <h1 className="rubik-title">What is Rubik's Cube?</h1>
        <p>
          The Rubik's Cube is a three-dimensional combination puzzle invented in
          1974 by Hungarian architect and professor Ernő Rubik. Originally
          designed as a teaching tool to demonstrate three-dimensional movement,
          it quickly became one of the most recognizable and best-selling
          puzzles in history. The classic 3*3 cube consists of six colored faces
          and challenges users to restore each face to a single color after it
          has been scrambled. Today, the Rubik's Cube represents much more than
          a puzzle—it is a symbol of logic, creativity, mathematics, and
          problem-solving.
        </p>
      </div>
      <img src={rubik} alt="rubik" />
    </div>
  );
};

export default ErnoRubik;
