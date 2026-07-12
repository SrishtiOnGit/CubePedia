import "../styles/diduknow.css";
import why from "../assets/why.png";

const DidYouKnow = () => {
  return (
    <div className="diduknow" data-aos="fade-up">
      <div className="diduknow-text">
        <h1>Did You Know ?</h1>
        <p>
          The creator of the Rubik's Cube, Ernő Rubik, took approximately one
          month to solve his own invention after scrambling it for the first
          time.
        </p>
      </div>
      <img src={why} alt="diduknow" />
    </div>
  );
};

export default DidYouKnow;
