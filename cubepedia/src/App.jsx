import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
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
