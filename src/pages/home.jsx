import { Link } from "react-router-dom";

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
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Resume</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photos</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Trips</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
