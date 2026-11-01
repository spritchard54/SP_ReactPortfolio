import mapLocations from "../data/mapLocations";
import LocationCategory from "./LocationCategory";

const categories = [
  "National Parks",
  "National Monuments",
  "National Memorials",
];

function LocationList() {
  return (
    <div>
      {categories.map((category) => {
        const filteredLocations = mapLocations.filter(
          (location) => location.category === category,
        );

        return (
          <LocationCategory
            key={category}
            title={category}
            locations={filteredLocations}
          />
        );
      })}
    </div>
  );
}

export default LocationList;
