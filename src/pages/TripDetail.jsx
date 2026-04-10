import { useParams } from "react-router-dom";
import mapLocations from "../assets/js/mapLocations";

export function TripDetail() {
  const { tripId } = useParams();
  const trip = mapLocations.find((item) => item.id === tripId);
  if (!trip) {
    return <h1>Trip not found</h1>;
  }
  return (
    <>
      <div className="container-fluid py-4">
        <h1>{trip.tripName}</h1>
        <p>{trip.summary}</p>
      </div>
    </>
  );
}
