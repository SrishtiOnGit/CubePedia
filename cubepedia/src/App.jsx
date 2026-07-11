import "./App.css";
import { Routes, Route } from "react-router-dom";

const HomePage = () => {
  return <div>HomePage</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
