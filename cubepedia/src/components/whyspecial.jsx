import "../styles/whyspecial.css";

const WhySpecial = () => {
  const specials = [
    {
      title: "Develops Problem-Solving Skills",
      description:
        "Every solve encourages logical thinking, pattern recognition, and strategic planning.",
    },
    {
      title: "Enhance Memory",
      description:
        "Learning algorithms strengthens memory and improves the ability to recognize recurring patterns.",
    },
    {
      title: "A Global Community",
      description:
        "Millions of cubers worldwide participate in competitions, create tutorials, develop new methods, and share their passion for the puzzle.",
    },
    {
      title: "Endless Possibilities",
      description:
        "With over 43 quintillion possible combinations, every scramble presents a unique challenge while remaining solvable.",
    },
  ];
  return (
    <div className="whyspecial" data-aos="fade-up">
      <h1>Why is the Rubik's Cube Special?</h1>
      <div className="whyspecial-container">
        {specials.map((special, index) => (
          <div className="special" key={index}>
            <h2>{special.title}</h2>
            <p>{special.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySpecial;
