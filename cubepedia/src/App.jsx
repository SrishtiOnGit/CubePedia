import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CubePedia from "./components/whatscubepedia";
import Features from "./components/features";
import WHY from "./components/why";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CubePedia />
      <WHY />
      <Features />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
