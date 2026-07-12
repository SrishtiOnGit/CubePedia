import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CubePedia from "./components/whatscubepedia";
import Features from "./components/features";
import WHY from "./components/why";
import AboutCube from "./pages/about";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CubePedia />
      <WHY />
      <Features />
      <footer className="footer">
        Copyright &copy; 2026 CubePedia. All rights reserved
      </footer>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutCube />} />
    </Routes>
  );
};

export default App;
