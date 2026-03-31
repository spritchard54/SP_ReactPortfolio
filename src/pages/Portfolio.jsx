import activate from "../public/images/actMe_1000w.png";
import weather from "../public/images/weatherDash_1000w.png";

export function Portfolio() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row mt-3">
          <h1>Profile</h1>
          <p>
            I started my career as a photojournalist working for WBRE-TV in
            Wilkes-Barre, PA and WHP-TV in Harrisburg, PA - NBC and CBS networks
            respectively. Where I currently am at is rather different. In my
            role as a Customer Success Manager for a marketing technology
            company &#40; SaaS &#41;, my primary objective is to develop and
            strengthen the customer/vendor relationship. That is to say, make
            sure the customer is extracting value from the platform &#40;their
            investment&#41;, and informed on other company offerings enabling
            growth on by sides of the partnership. Where I hope to be is still a
            bit up in the air. This portfolio exists because I have always had
            an interest in web development going back to the early days of the
            internet. I'm a builder and creator at heart but also a strategist
            and a planner. It may not be clear on where I&apos;ll be in the
            months and years ahead, but I hope I'm still doing those things.
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
              <img src={activate} className="card-img-top" alt="..." />
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
                  className="btn btn-primary"
                >
                  View the App...
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-5">
              <img src={weather} className="card-img-top" alt="..." />
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
                  className="btn btn-primary"
                >
                  View the App...
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
          <h3>Indiana University of Pennsylvania - Indiana, PA</h3>
          <p>Bachelor of Science: Communications Media</p>
           <h3>University of Phoenix</h3> 
           <p>Associate of Arts:
          Information Technology, Web Design</p> 
          <h3>University of Pennsylvania</h3>
          <p>Certificate: Full Stack Web Development Bootcamp</p>
        </div>
      </div>
    </>
  );
}
