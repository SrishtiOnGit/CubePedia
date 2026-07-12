import center from "../assets/center.png";
import edge from "../assets/edge.png";
import corner from "../assets/corner.png";
import core from "../assets/core.png";
import "../styles/anatomy.css";

const Anatomy = () => {
  const anatomy = [
    {
      name: "Center Piece",
      description:
        "The six center pieces determine the color of each face and remain fixed relative to one another.",
      image: center,
    },
    {
      name: "Edge Piece",
      description:
        "Edge pieces determine the color of each face and remain fixed relative to one another.",
      image: edge,
    },
    {
      name: "Corner Piece",
      description:
        "Corner pieces contain three colors and are located at the corners of the cube. There are eight corner pieces.",
      image: corner,
    },
    {
      name: "Core Mechanism",
      description:
        "Hidden inside the cube, the core connects all center pieces and allows the puzzle to rotate smoothly.",
      image: core,
    },
  ];
  return (
    <div className="anatomy" data-aos="fade-up">
      <h1>Core Anatomy</h1>
      <div className="anatomy-container">
        {anatomy.map((anat, index) => (
          <div className="anatomy-item" key={index}>
            <h2>{anat.name}</h2>
            <img src={anat.image} alt={anat.name} />
            <p>{anat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anatomy;
