import "../styles/hardware.css";
import lubes from "../assets/lubes.png";
import maglev from "../assets/maglev.png";
import springs from "../assets/springs.png";
import adjustment from "../assets/adjustment.png";

const Hardware = () => {
  const hardwares = [
    {
      title: "Lubes",
      description:
        "Lubes are essential for smooth movement and prevent friction on the cube.",
      image: lubes,
    },
    {
      title: "MagLev Kits",
      description:
        "Magnetic levitation replaces springs with repelling magnets, making cubes lighter and faster.",
      image: maglev,
    },
    {
      title: "Springs",
      description:
        "Springs control the cube's tension and overall turning feel.",
      image: springs,
    },
    {
      title: "Adjustment Tools",
      description:
        "Used for changing tension and compression settings on modern speedcubes.",
      image: adjustment,
    },
  ];
  return (
    <div className="cubeware" data-aos="fade-up">
      <div className="hardwares">
        {hardwares.map((hardware, index) => (
          <div className="hardware" key={index}>
            <img src={hardware.image} alt={hardware.title} />
            <h2>{hardware.title}</h2>
            <p>{hardware.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hardware;
