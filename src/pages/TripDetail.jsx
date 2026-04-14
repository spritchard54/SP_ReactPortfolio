import { useParams } from "react-router-dom";
import mapLocations from "../assets/js/mapLocations";

export function TripDetail() {
  const { tripId } = useParams();
  const trip = mapLocations.find((item) => item.id === tripId);
  if (!trip) {
    return <h1>Trip not found</h1>;
  }
  return (
    <div className="container-fluid py-4">
      
      <div className="row">
        <h1>{trip.tripName}</h1>
        <p>{trip.summary}</p>
      </div>
      
      <div className="row">
        
        <div className="col-12 col-md-6">
          {trip.sections?.map((section, index) => (
            <div key={index} className="mb-4">
              <h3>{section.heading}</h3>
              {section.paragraphs?.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="col-12 col-md-6">
          Here is some more content for the second column
        </div>
        
      </div>
    
    </div>
  );
}
