import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ghlogo from "../public/github-mark.png";
import lilogo from "../public/icon-logo-linkedin.png";
import iglogo from "../public/icon-logo-instagram.png";

export function Footer() {
  const currentYear = dayjs().format("YYYY");

  return (
    <>
      <footer className="mt-auto py-3 bg-light">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-sm-8 text-center text-sm-start ">
              <span className="text-muted">
                Copyright &copy; 2024-{currentYear} Steve Pritchard |{" "}
                <a href="mailto:swpritchard54@gmail.com">
                  swpritchard54@gmail.com
                </a>
              </span>
            </div>

            <div className="col-sm-4 text-center text-sm-end mt-2 mt-sm-0">
              <a href="https://www.instagram.com/steve_p.54/" target="blank">
                <img
                  className="mx-2 "
                  src={iglogo}
                  alt="Instagram Logo"
                />
              </a>

              <a href="https://github.com/spritchard54" target="blank">
                <img
                  className="mx-2 "
                  src={ghlogo}
                  alt="Github Logo"
                />
              </a>
              <a href="https://www.linkedin.com/in/swpritchard/" target="blank">
                <img
                  className="mx-2 "
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
