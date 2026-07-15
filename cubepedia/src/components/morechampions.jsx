import wang from "../assets/wang.png";
import park from "../assets/max.png";
import kolasiński from "../assets/tymon.png";
import valk from "../assets/mats.png";
import "../styles/morechampions.css";

const More = () => {
  const champions = [
    {
      name: "Max Park",
      country: "USA",
      image: park,
    },
    {
      name: "Tymon Kolasiński",
      country: "Poland",
      image: kolasiński,
    },
    {
      name: "Yiheng Wang",
      country: "China",
      image: wang,
    },
    {
      name: "Mats Valk",
      country: "Netherland",
      image: valk,
    },
  ];
  return (
    <div className="more" data-aos="fade-up">
      <h1>More Champions</h1>
      <div className="morechampions">
        {champions.map((champion, index) => (
          <div className="champion" key={index}>
            <img src={champion.image} alt={champion.name} />
            <p>{champion.name}</p>
            <p>{champion.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
