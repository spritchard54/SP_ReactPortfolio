import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-xxl ">
          <a className="navbar-brand" href="#">
            S<span className="second-letter">.</span>Pritchard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Portfolio">
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Photos">
                  Photos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Trips">
                  Trips
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
