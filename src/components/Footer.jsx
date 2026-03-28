import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ghlogo from "../../public/github-mark.png";
import lilogo from "../../public/icon-logo-linkedin.png";
import iglogo from "../../public/icon-logo-instagram.png";

export function Footer() {
  const currentYear = dayjs().format("YYYY");

  return (
    <>
      <footer className="mt-auto py-3 bg-light">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col">
              <span className="text-muted">
                Copyright &copy; 2024-{currentYear} Steve Pritchard |{" "}
                <a href="mailto:swpritchard54@gmail.com">
                  swpritchard54@gmail.com
                </a>
              </span>
            </div>

            <div className="col ">
              <a href="https://www.instagram.com/steve_p.54/" target="blank">
                <img
                  className="mx-2 float-end"
                  src={iglogo}
                  alt="Instagram Logo"
                />
              </a>

              <a href="https://github.com/spritchard54" target="blank">
                <img
                  className="mx-2 float-end"
                  src={ghlogo}
                  alt="Github Logo"
                />
              </a>
              <a href="https://www.linkedin.com/in/swpritchard/" target="blank">
                <img
                  className="mx-2 float-end"
                  src={lilogo}
                  alt="LinkedIn Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
