import { Link } from "react-router-dom";
import yose from "../public/images/IMG_6240.jpeg";
import rapids from "../public/images/IMG_4127.jpeg";
import keyboard from "../public/images/IMG_0456.jpeg";

export function Home() {
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-2">Tech Enthusiast | Aspiring Web Developer</h3>
        <div>
          Former Organizational Change Management (OCM) Consultant, current
          Customer Success Manager, aspiring Web Developer, and Fullstack Web
          Development Bootcamp graduate from the University of Pennsylvania.
          Having worked in or adjacent to technology for over a decade, I've
          seen a lot, done a lot, and learned a lot along the way. This site is
          equal parts playground and, showcase for what I know and what I've
          done. To learn more about my work history, check out my resume. Thanks
          for stopping by!
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mt-5">
              <img src={keyboard} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text">
                  Download my resume and view my portfolio. Check back regularly for updates.
                </p>
                <a href="#" className="btn btn-primary">
                  See my work...
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5">
              <img src={rapids} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photos</h5>
                <p className="card-text">
                  I count photography among my many hobbies. This is mostly a collection of photos from trips I've been on.
                </p>
                <a href="#" className="btn btn-primary">
                  Browse...
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5">
              <img 
                className="card-img-top"
                src={yose}  
                alt="Yosemite Backcountry" />
              <div className="card-body">
                <h5 className="card-title">Trips</h5>
                <p className="card-text">
                  See where I've been recently and over the years. From the hills of Pennsylvania, to the peaks the Mountain West.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
