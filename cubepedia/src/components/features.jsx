import "../styles/features.css";

const Features = () => {
  const features = [
    {
      title: "Algorithm Library",
      description: "Learn OLL, PLL, F2L and understand why they work.",
    },
    {
      title: "Champion Archieve",
      description: "Discover the people who changed speedcubing forever.",
    },
    {
      title: "Cube Hardware",
      description: "Know about it's materials like lubes, magnets and more.",
    },
    {
      title: "Popular Cubes",
      description: "Discover the most popular Rubik's Cubes.",
    },
    {
      title: "Simple To Use",
      description: "It's simple to use and easy to navigate.",
    },
  ];
  return (
    <div className="features">
      <h1>Features</h1>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
