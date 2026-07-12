import "../styles/story.css";
import story from "../assets/story.png";

const Story = () => {
  return (
    <div className="story" data-aos="fade-up">
      <div className="story-text">
        <h1>The Story Behind It</h1>
        <p>
          In 1974, Ernő Rubik created the cube to help his students better
          understand spatial relationships and movement in three dimensions.
          After scrambling the cube for the first time, he realized how
          surprisingly difficult it was to return every color to its original
          position. The puzzle was released internationally in 1980 and rapidly
          gained worldwide popularity. Over the decades, it has evolved from an
          educational tool into a global cultural icon, inspiring competitions,
          scientific research, speedcubing communities, and millions of
          enthusiasts across the world.
        </p>
      </div>
      <img src={story} alt="story" />
    </div>
  );
};

export default Story;
