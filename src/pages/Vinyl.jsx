// Import vinyl data from the JSON file.
// Because this is a JSON file, it is imported as a default export.
import vinylRecords from "../assets/js/vinylRecords.json";
import { useState } from "react";

// Functional React component.
// This component renders the Vinyl Collection page.
function Vinyl() {
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  // Unique artists sorted alphabetically
  const artists = [
    ...new Set(vinylRecords.map((record) => record.artist)),
  ].sort();

  //Unique Genres
  const genres = [
    ...new Set(
      // flatMap is used because come records have a single genre while others have multiples. flatMap flattens everyting into a single array.
      vinylRecords.flatMap((record) =>
        Array.isArray(record.genre) ? record.genre : [record.genre],
      ),
    ),
  ].sort();

  const filteredRecords = vinylRecords.filter((record) => {
    const artistMatch = !selectedArtist || record.artist === selectedArtist;

    const genreMatch =
      !selectedGenre ||
      (Array.isArray(record.genre)
        ? record.genre.includes(selectedGenre)
        : record.genre === selectedGenre);

    return artistMatch && genreMatch;
  });

  return (
    // Bootstrap container adds responsive spacing and layout.
    // my-4 = margin-top and margin-bottom
    <div className="container my-4">
      {/* Page heading */}
      <h1>Vinyl Collection</h1>
      {/* Intro paragraph */}
      <p>A small selection of albums from my personal record collection.</p>
      
      
      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label">Filter by Artist</label>

          <select
            className="form-select"
            value={selectedArtist}
            onChange={(e) => setSelectedArtist(e.target.value)}
          >
            <option value="">All Artists</option>

            {artists.map((artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Filter by Genre</label>

          <select
            className="form-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>

            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 
        Bootstrap responsive grid:
        - row-cols-1 = 1 card per row on extra small screens
        - row-cols-sm-2 = 2 cards per row on small screens
        - row-cols-md-3 = 3 cards per row on medium screens
        - row-cols-xl-5 = 5 cards per row on extra large screens
        - g-2 = grid spacing (gutters) between cards
      */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-2">
        {/* 
          Create a copy of the array before sorting.
          Why? .sort() mutates the original array.
          Using [...vinylRecords] preserves the original data.
        */}
        {[...filteredRecords]
          // Sort albums alphabetically by artist name.
          // We remove "The" from artist names so
          // "The Black Keys" sorts under B instead of T.
          .sort((a, b) =>
            a.artist
              .replace(/The /i, "")
              .localeCompare(b.artist.replace(/^The /i, "")),
          )
          // Loop through each record and render a card.
          // .map() transforms array items into JSX elements.
          .map((record) => (
            /*
              Bootstrap column.
              key is required by React when rendering lists.
              We use MongoDB's unique object ID.
            */
            <div className="col" key={record._id.$oid}>
              {/* h-100 makes all cards equal height */}
              <div className="card h-100">
                {/* Card content */}
                <div className="card-body">
                  {/* 
                    Conditional rendering using a ternary operator.
                    
                    If artwork exists:
                    -> render image
                    
                    If artwork does NOT exist:
                    -> display fallback text
                  */}
                  {record.artwork ? (
                    <img
                      // Image source URL from JSON data
                      src={record.artwork}
                      // Bootstrap image/card spacing classes
                      className="card-img-top mb-3"
                      // Accessibility text for screen readers
                      alt="`${record.albumName} album cover`"
                      // Lazy loading improves performance
                      // Images load only when needed
                      loading="lazy"
                    />
                  ) : (
                    // Fallback content when no image exists
                    <div className="mb-3">Image coming soon...</div>
                  )}
                  <h5 className="card-subtitle mb-2 text-muted">
                    {record.artist}
                  </h5>

                  <p className="card-text">
                    <strong>Album Name:</strong> {record.albumName}
                  </p>
                  <p className="card-text">
                    <strong>Genre:</strong>{" "}
                    {/* 
                    Genre display
                    Some records have:
                    genre: "Rock"

                    Others have:
                    genre: ["Rock", "Blues"]

                    We check if genre is an array.
                  */}
                    {Array.isArray(record.genre) ? (
                      /*
                        If genre is an array:
                        loop through genres and create badges
                      */
                      record.genre.map((genre) => (
                        <span
                          key={genre}
                          className="badge text-bg-secondary me-2"
                        >
                          {genre}
                        </span>
                      ))
                    ) : (
                      /*
                        If genre is NOT an array:
                        display single genre badge
                      */
                      <span className="badge text-bg-secondary me-2">
                        {record.genre}
                      </span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong>Label:</strong> {record.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
// Export component so it can be imported into routes/pages
export default Vinyl;
