import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CubePedia from "./components/whatscubepedia";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CubePedia />
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
