import "../styles/popularcubes.css";
import cube1 from "../assets/moyu.png";
import cube2 from "../assets/gan.png";
import cube3 from "../assets/torondo.png";
import cube4 from "../assets/dayan.png";

const PopularCubes = () => {
  const popularCubes = [
    {
      name: "MoYu RS3M V5",
      image: cube1,
      description:
        "The MoYu RS3M V5 is one of the most recommended speedcubes thanks to its affordability, smooth turning, and excellent performance. It offers premium features at a budget-friendly price, making it a favorite among new speedcubers.",
    },
    {
      name: "GAN 15 Maglev UV",
      image: cube2,
      description:
        "GAN 15 is GAN's flagship speedcube, featuring MagLev technology, corner-core magnets, and a lightweight design. Built for maximum speed and customization, it's trusted by many elite competitors.",
      rating: "",
    },
    {
      name: "Torondo V4 Pioneer",
      image: cube3,
      description:
        "The Tornado V4 Pioneer is known for its exceptional corner cutting, smooth turning, and customizable magnetic system. It has become one of the most popular choices in modern speedcubing.",
      rating: "",
    },
    {
      name: "Dayan Guhong Pro",
      image: cube4,
      description:
        "The Dayan Guhong Pro combines lightweight construction with a smooth, controllable feel. It offers multiple magnetic versions, making it suitable for beginners and experienced cubers alike.",
      rating: "",
    },
  ];
  return (
    <div className="popularcubes" data-aos="fade-up">
      <div className="hardwares">
        {popularCubes.map((cube, index) => (
          <div className="cube" key={index}>
            <h2>{cube.name}</h2>
            <img src={cube.image} alt={cube.name} />
            <p>{cube.description}</p>
            <p>{cube.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCubes;
