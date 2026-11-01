import { Link } from "react-router-dom";

function LocationCategory({ title, locations }) {
  return (
    <section>
      <h2>{title}</h2>

      <ol className="location-list">
        {locations
          .toSorted((a, b) => a.tripName.localeCompare(b.tripName))
          .map((location) => (
            <li key={location.id}>
              <Link to={`/trips/${location.id}`}>
                {location.tripName}
              </Link>
            </li>
          ))}
      </ol>
    </section>
  );
}

export default LocationCategory;