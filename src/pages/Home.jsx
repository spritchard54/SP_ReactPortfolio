import { Link } from "react-router-dom";
import { getCloudinaryUrl, getCloudinarySrcSet } from "../utils/cloudinary";
const images = [
  {
    publicId: "IMG_0456_x08fkt",
    version: "v1777477578",
    alt: "Apple Keyboard",
  },
  {
    publicId: "IMG_4127_g6pcxd",
    version: "v1777477586",
    alt: "Rapids in Olympic National Park",
  },
  {
    publicId: "IMG_6240_q7vepk",
    version: "v1776812749",
    alt: "Red mountains deep in the Yosemite Backcountry",
  },
];

export function Home() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="mt-3">Tech Enthusiast | Aspiring Web Developer</h1>
        <div>
          Former Organizational Change Management &#40;OCM&#41; Consultant,
          current Customer Success Manager, aspiring Web Developer, and
          Fullstack Web Development Bootcamp graduate from the University of
          Pennsylvania. Having worked in or adjacent to technology for over a
          decade, I've seen a lot, done a lot, and learned a lot along the way.
          This site is equal parts playground and, showcase for what I know and
          what I've done. To learn more about my work history, check out my
          resume. Thanks for stopping by!
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-4">
            <div className="card mt-5">
              <img
                src={getCloudinaryUrl(images[0].publicId, images[0].version, {
                  width: 800,
                })}
                srcSet={getCloudinarySrcSet(images[0].publicId, images[0].version)}
                sizes="(max-width: 768px) 100vw, 800px"
                className="card-img-top"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text">
                  Download my resume and view my portfolio. Check back regularly
                  for updates to existing projects and new projects I am working
                  on.
                </p>
                <Link to="Portfolio" className="btn btn-primary">
                  See my work...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5">
              <img
                src={getCloudinaryUrl(images[1].publicId, images[1].version, {
                  width: 800,
                })}
                srcSet={getCloudinarySrcSet(images[1].publicId, images[1].version)}
                sizes="(max-width: 768px) 100vw, 800px"
                className="card-img-top"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Photos</h5>
                <p className="card-text">
                  I count photography among my many (maybe too many) hobbies. This is
                  mostly a collection of photos from trips I've been on.
                </p>
                <Link to="Photos" className="btn btn-primary">
                  Browse...
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-5">
              <img
                src={getCloudinaryUrl(images[2].publicId, images[2].version, {width: 800})}
                srcSet={getCloudinarySrcSet(images[2].publicId, images[2].version)}
                sizes="(max-width: 768px) 100vw, 800px"
                className="card-img-top"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Trips</h5>
                <p className="card-text">
                  See where I've been recently and over the years. From the
                  hills of Pennsylvania, to the peaks the Mountain West.
                </p>
                <Link to="Trips" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
