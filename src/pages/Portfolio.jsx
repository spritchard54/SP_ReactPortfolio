import activate from "../assets/portfolioImages/actMe_1000w.png";
import weather from "../assets/portfolioImages/weatherDash_1000w.png";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Steve Pritchard | Portfolio</title>

        <meta
          name="description"
          content="Steve Pritchard professional work history, projects, and resume."
        />

        <meta property="og:title" content="Steven Pritchard | Portfolio" />

        <meta
          property="og:description"
          content="Steve Pritchard professional work history, projects, and resume."
        />
      </Helmet>
      <div className="container-fluid ">
        <div className="row mt-3">
          <h1>Profile</h1>
          <p>
            I began my career as a photojournalist, working for NBC affiliate
            WBRE-TV in Wilkes-Barre, Pennsylvania, and CBS affiliate WHP-TV in
            Harrisburg, Pennsylvania. Those early experiences helped shape my
            ability to think critically, communicate effectively, and tell
            compelling stories—skills that continue to influence my work today.
          </p>
          <p>
            My career path has since evolved into the technology space. As a
            Customer Success Manager for multiple marketing technology (SaaS) companies,
            my primary focus has been building strong customer relationships and
            ensuring clients realize measurable value from their investment in
            the platform. This includes guiding strategic platform adoption,
            identifying opportunities for growth, and helping customers stay
            informed about solutions that support long-term success for both the
            client and the business.
          </p>
          <p>
            Where I see myself in the future is still evolving, but one thing
            has remained constant: a deep interest in technology and web
            development. This portfolio exists because building for the web has
            fascinated me since the early days of the internet. I’m a builder
            and creator at heart, but also a strategist and planner who enjoys
            solving problems and bringing ideas to life. While the exact path
            ahead may not be fully defined, I hope it continues to involve
            creating, learning, and working at the intersection of technology
            and innovation.
          </p>
        </div>
        <div className="row">
          <h1>Projects</h1>
          <p>
            My portfolio is a work-in-progress, but have a look below at some of
            my past projects. There are links to the live site, as well as links
            to the Github repo where you will find additional details. Please
            feel free to reach out with any questions, and check back
            periodically to see what I have been up to.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-5">
              <img
                src={activate}
                className="card-img-top shadow-sm rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">ActivateMe</h5>
                <p className="card-text">
                  Time has a way of slipping away from us. This inspired myself
                  and team members from my UPENN Web Development Bootcamp to
                  create ActivateMe. Log and view daily activities and utilize
                  data visualizations to better understand where all that time
                  is going.
                </p>
                <a
                  href="https://activateme.onrender.com/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View the App...
                </a>
                <a
                  href="https://github.com/spritchard54/ActivateMe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <FaGithub size="20" />
                  Github Repo...
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-5">
              <img
                src={weather}
                className="card-img-top shadow-sm rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">OpenWeather Forecast</h5>
                <p className="card-text">
                  This site allows users to view the forecast for a desired
                  location by typing in the name of the city. Time allowing I
                  want to add in zip code functionality and city and state
                  funtionality. It utilizes the OpenWeather API and the site was
                  built using HTML, CSS, and JavaScript.
                </p>
                <a
                  href="https://spritchard54.github.io/weatherDashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View the App...
                </a>
                <a
                  href="https://github.com/spritchard54/weatherDashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <FaGithub size="20" />
                  Github Repo...
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <h1 className="mb-4">Work Experience</h1>
          {/* Persado */}
          <div className="row mt-3">
            <div className="col-sm-4 m">
              <h4>Sr. Customer Success Manager</h4>
              <h5>Persado</h5>
              <span>March 2024 - January 2026</span>
            </div>
            <div className="col-sm-8">
              <p>
                Responsible for partnering with both internal teams and
                customers to drive value through adoption of Persado's platform.
                Collaborate with customers daily to build relationships,
                establish success metrics & track results, drive utilization,
                bring awareness of all available Persado solutions, and uncover
                growth opportunities.
              </p>
              <ul>
                <li>Email Marketing</li>
                <li> Artificial Intelligence &#40;AI&#41;</li>
                <li>Natural Language Generation &#40;NLG&#41;</li>
                <li>Large Langauge Models &#40;LLM&#41;</li>
                <li>Strategic Planning</li>
              </ul>
            </div>
          </div>
          {/* Optimizely */}
          <div className="row mt-3">
            <div className="col-sm-4">
              <h4>Customer Success Manager</h4>
              <h5>Optimizely</h5>
              <span>December 2021 - February 2024</span>
            </div>
            <div className="col-sm-8">
              <p>
                Partner in helping customers achieve their strategic objectives
                and extract maximum value from their investment in web
                experimentation. Drive adoption, retention and expansion of
                products and services by being a trusted advisor to customers.
                Work to understand customers' challenges and needs, and respond
                with a problem solving mindset. Additionally, serve as the
                liaison between the organization and the customer - facilitating
                collaboration with Product, Engineering, Sales, Professional
                Services and others to be the voice of the customer within the
                company.
              </p>
              <ul>
                <li>Web Experimentation</li>
                <li>Growth Marketing</li>
                <li>Strategic Planning</li>
              </ul>
            </div>
          </div>
          {/* Deloitte */}
          <div className="row mt-3">
            <div className="col-sm-4">
              <h4>Consultant</h4>
              <h5>Deloitte Consulting, LLP</h5>
              <span>September 2017 - August 2021</span>
            </div>
            <div className="col-sm-8">
              <p>
                Developed, launched and evaluated organizational change
                management strategies for enterprise scale fintech
                implementations. Clients invested heavily in tools and
                architecture to grow their business and it was my job to make
                sure that stakeholders were prepared leverage the investment on
                day-one.
              </p>
              <ul>
                <li>Training, Change Management, and Communications</li>
                <li>SAP S/4HANNA, Oracle Cloud Financials</li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <h4>Solution Analyst</h4>
              <h5>Deloitte Consulting LLP</h5>
              <span>September 2013 - Feb 2017</span>
            </div>
            <div className="col-sm-8">
              <p>
                Developed, launched and evaluated organizational change
                management strategies for enterprise scale fintech
                implementations. Clients invested heavily in tools and
                architecture to grow their business and it was my job to make
                sure that stakeholders were prepared leverage the investment on
                day-one.
              </p>
              <ul>
                <li>Training, Change Management, and Communications</li>
                <li>SAP S/4HANNA, Oracle Cloud Financials</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="mb-3">Education</h1>
          <h4>Indiana University of Pennsylvania - Indiana, PA</h4>
          <p>Bachelor of Science: Communications Media</p>
          <h4>University of Phoenix</h4>
          <p>Associate of Arts: Information Technology, Web Design</p>
          <h4>University of Pennsylvania</h4>
          <p>Certificate: Full Stack Web Development Bootcamp</p>
        </div>
      </div>
    </>
  );
}
