import why from "../assets/why.png";
import "../styles/why.css";

const WHY = () => {
  return (
    <div className="why">
      <div className="why-text">
        <h1>Why CubePedia?</h1>
        <p>
          There are plenty of websites that teach algorithms. CubePedia goes one
          step further by preserving the history, discoveries, people, and
          innovations that made speedcubing what it is today.
        </p>
      </div>
      <img src={why} alt="why" />
    </div>
  );
};

export default WHY;
