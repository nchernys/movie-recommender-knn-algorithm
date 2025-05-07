import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img src="/logo/movies.svg" alt="Movies Logo" />
      </Link>
      <div className="buttons">
        {/*
        <a href="/movie/add">
          <button>Add Movie</button>
        </a>
        <a href="/movie/delete">
          <button>Delete Movie</button>
        </a>

*/}
      </div>
    </div>
  );
};

export default Navigation;
