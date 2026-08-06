import { Link } from "react-router-dom";
import { getCloudinaryUrl, getCloudinarySrcSet } from "../utils/cloudinary";
import { Helmet } from "react-helmet-async";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

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
  {
    publicId: "IMG_0690_sal2lc.jpg",
    version: "v1779133087",
    alt: "Steve sitting at desk working hard or hardly working...",
  },
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Helmet>
        <title>Steven Pritchard | Home</title>

        <meta
          name="description"
          content="Web developer portfolio featuring React projects, travel photography, and mapping applications."
        />

        <meta property="og:title" content="Steven Pritchard | Home" />

        <meta
          property="og:description"
          content="React portfolio featuring projects and photography."
        />
      </Helmet>

      <div className="container-fluid">
        <h1 className="home-title my-4">
          Tech Enthusiast | Aspiring Web Developer
        </h1>
        <div className="row align-items-start">
          {/* Intro Text */}
          <div className="col-12 col-md-7 order-2 order-md-1 home-paragraph">
            <h3>A portfolio project...</h3>
            <p>
              I bring over a decade of experience working in and alongside
              technology, with a background spanning customer success,
              consulting, and organizational change management. After beginning
              my career in broadcast journalism as a photojournalist, I
              transitioned into technology-focused roles supporting enterprise
              software implementations, stakeholder engagement, and customer
              success.
            </p>
            <p>
              At Deloitte, I supported Oracle and SAP system implementations
              with a focus on change management, training, and stakeholder
              communication. Most recently, as a Customer Success Manager in the
              SaaS space, I help customers maximize value from technology
              investments through relationship management, platform adoption,
              and strategic partnership building.
            </p>
            <p>
              Driven by a long-standing interest in web development and
              technology, I completed the University of Pennsylvania Full Stack
              Web Development Bootcamp and built a portfolio site showcasing
              full stack web develoment projects, photography, travel content,
              and interactive web experiences.
            </p>
          </div>
          {/* Intro Image */}
          <div className="col-12 col-md-5 order-1 order-md-2 mb-4 mb-md-0">
            <img
              src={getCloudinaryUrl(images[3].publicId, images[3].version, {
                width: 900,
              })}
              srcSet={getCloudinarySrcSet(
                images[3].publicId,
                images[3].version,
              )}
              sizes="(max-width: 991px) 100vw, 500px"
              className="home-image rounded img-fluid shadow-sm w-100"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>

        
          <section className="featured-section my-4">
            <h3 className="mb-4">Featured Project</h3>

            <div className="row">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        

        {/* Cards Section */}
        <div className="row justify-content-center mb-5">
          <h3 className="my-4">
            What I've done and what I'm working on...
          </h3>
          <div className="col-md-4">
            <div className="card mb-3">
              <img
                src={getCloudinaryUrl(images[0].publicId, images[0].version, {
                  width: 800,
                })}
                srcSet={getCloudinarySrcSet(
                  images[0].publicId,
                  images[0].version,
                )}
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
                <Link to="Portfolio" className="btn home-button">
                  See my work...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img
                src={getCloudinaryUrl(images[1].publicId, images[1].version, {
                  width: 800,
                })}
                srcSet={getCloudinarySrcSet(
                  images[1].publicId,
                  images[1].version,
                )}
                sizes="(max-width: 768px) 100vw, 800px"
                className="card-img-top"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Photos</h5>
                <p className="card-text">
                  I count photography among my many (maybe too many) hobbies.
                  This is mostly a collection of photos from trips I've been on.
                </p>
                <Link to="Photos" className="btn home-button">
                  Browse...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img
                src={getCloudinaryUrl(images[2].publicId, images[2].version, {
                  width: 800,
                })}
                srcSet={getCloudinarySrcSet(
                  images[2].publicId,
                  images[2].version,
                )}
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
                <Link to="Trips" className="btn home-button">
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
