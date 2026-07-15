import Feliks from "../assets/feliks.png";
import "../styles/featured.css";

const Featured = () => {
  return (
    <div className="featured" data-aos="fade-up">
      <div className="featured-text">
        <h1 className="featured-title">Feliks Zemdegs</h1>
        <p>The most influential speedcuber of the modern era.</p>
        <button
          onClick={() =>
            window.open(
              "https://en.wikipedia.org/wiki/Feliks_Zemdegs",
              "_blank",
            )
          }
          className="read-story"
        >
          Read Story
        </button>
      </div>
      <img src={Feliks} alt="Feliks" />
    </div>
  );
};

export default Featured;
