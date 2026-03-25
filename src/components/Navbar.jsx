import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
    <div className="navContainer">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/Resume">
        <button>Resume</button>
      </Link>

      <Link to="/Photos">
        <button>Photos</button>
      </Link>

      <Link to="/Trips">
        <button>Trips</button>
      </Link>
      </div>
    </>
  );
}
