import PopularCubes from "../components/popularcubes";
import "../styles/popular.css";

const Popular = () => {
  return (
    <div>
      <div className="popular">
        <h1>
          Popular <span>Cubes</span>
        </h1>
      </div>
      <PopularCubes />
    </div>
  );
};

export default Popular;
