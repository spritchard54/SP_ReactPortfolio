// import { FaMountain } from "react-icons/fa6";
import { MdOutlineDateRange, MdTerrain } from "react-icons/md";
import { GiHiking } from "react-icons/gi";

function TripReportCard({ trip }) {
  return (
    <section className="card mb-4 shadwo-sm">
      <div className="card-body">
        <h3>{trip.title}</h3>
        <h5 className="text-muted">{trip.dates}</h5>

        <div className="d-flex flex-wrap gap-3 my-3 small">
          <span className="d-flex align-items-center gap-2">
            <GiHiking size={20} />
            {trip.distance}
          </span>
          <span className="d-flex align-items-center gap-2">
            <MdTerrain size={20} />
            {trip.elevation}
          </span>
          <span className="d-flex align-items-center gap-2">
            <MdOutlineDateRange size={20} />
            {trip.duration}
          </span>
        </div>

        <p>{trip.summary}</p>

        <h6>Highlights</h6>

        <ul>
          {trip.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <details className="mt-3">
          <summary className="read-more-link">Read full trip report</summary>

          <div className="mt-3">
            {trip.fullReport.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

export default TripReportCard;
