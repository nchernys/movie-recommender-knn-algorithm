import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowMovie from "./movieOperations/showMovie";
import Home from "./movieOperations/home";
import DeleteMovie from "./movieOperations/deleteMovie";
import AddMovie from "./movieOperations/addMovie";
import Navigation from "./components/navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:slug" element={<ShowMovie />} />
        <Route path="/movie/add" element={<AddMovie />} />
        <Route path="/movie/delete" element={<DeleteMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
