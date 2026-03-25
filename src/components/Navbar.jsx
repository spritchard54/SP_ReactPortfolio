import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/page1">
        <button>Path 1</button>
      </Link>
      <Link to="/page2">
        <button>Path 2</button>
      </Link>
      <Link to="/page3">
        <button>Path 3</button>
      </Link>
    </>
  );
}
