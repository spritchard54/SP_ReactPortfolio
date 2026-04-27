import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-xxl ">
          <a className="navbar-brand" href="#">
            Steve<span className="logo-period">.</span>
            <span className="last-name">Pritchard</span>
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
                <Link className="nav-link" aria-current="page" to="/portfolio">
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/photos">
                  Photos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/trips">
                  Trips
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
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
