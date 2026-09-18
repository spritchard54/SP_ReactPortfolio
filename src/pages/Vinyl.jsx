// Import vinyl data from the JSON file.
// Because this is a JSON file, it is imported as a default export.
import vinylRecords from "../data/vinylRecords.json";
import { useState, useRef, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";

// Functional React component.
// This component renders the Vinyl Collection page.
function Vinyl() {
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDecade, setSelectedDecade] = useState("");
  const [artistSearch, setArtistSearch] = useState("");
  const [artistDropdownOpen, setArtistDropdownOpen] = useState(false);
  const artistDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        artistDropdownRef.current &&
        !artistDropdownRef.current.contains(event.target)
      ) {
        setArtistDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [showExtendedOnly, setShowExtendedOnly] = useState(
    searchParams.get("extended") === "true",
  );

  const location = useLocation();

  // Unique artists sorted alphabetically
  const artists = [
    ...new Set(vinylRecords.map((record) => record.artist)),
  ].sort();

  const filteredArtists = artists.filter((artist) =>
    artist.toLowerCase().includes(artistSearch.toLowerCase()),
  );

  //Unique Genres
  const genres = [
    ...new Set(
      // flatMap is used because come records have a single genre while others have multiples. flatMap flattens everyting into a single array.
      vinylRecords.flatMap((record) =>
        Array.isArray(record.genre) ? record.genre : [record.genre],
      ),
    ),
  ].sort();

  const getDecade = (releaseYear) => {
    return Math.floor(releaseYear / 10) * 10;
  };

  const getReleaseYear = (originalReleaseDate) => {
    const dateValue = originalReleaseDate.$date;

    if (typeof dateValue === "string") {
      return new Date(dateValue).getFullYear();
    }

    return new Date(Number(dateValue.$numberLong)).getFullYear();
  };

  const decades = [
    ...new Set(
      vinylRecords.map((record) => {
        const releaseYear = getReleaseYear(record.originalReleaseDate);
        return getDecade(releaseYear);
      }),
    ),
  ].sort((a, b) => a - b);

  const filteredRecords = vinylRecords.filter((record) => {
    const releaseYear = getReleaseYear(record.originalReleaseDate);

    const recordDecade = getDecade(releaseYear);

    const decadeMatch =
      !selectedDecade || recordDecade === Number(selectedDecade);

    const artistMatch = !selectedArtist || record.artist === selectedArtist;

    const genreMatch =
      !selectedGenre ||
      (Array.isArray(record.genre)
        ? record.genre.includes(selectedGenre)
        : record.genre === selectedGenre);

    const collectionMatch =
      !showExtendedOnly ||
      record.ownership?.collectionStatus === "Extended Collection";

    return artistMatch && genreMatch && collectionMatch && decadeMatch;
  });

  const myCollectionCount = vinylRecords.filter(
    (record) => record.ownership?.collectionStatus === "My Collection",
  ).length;

  const extCollectionCount = vinylRecords.filter(
    (record) => record.ownership?.collectionStatus === "Extended Collection",
  ).length;

  const totalRecords = myCollectionCount + extCollectionCount;

  return (
    // Bootstrap container adds responsive spacing and layout.
    // my-4 = margin-top and margin-bottom
    <div className="container my-4">
      <h1>Vinyl Collection</h1>
      <p>
        I've been at record stores, flipping through records, and had to ask
        myself "do I already own this?". So this page helps me keep track of
        what I own when I'm out and about. It's also interesting to see how the
        collection is coming together. Which artists do I often buy, which
        genres, etc. Another nice feature I've included is the ability to add
        albums to my library as part of my "Extended Collection". Not my
        records, but records I have access to.
      </p>
      <div className="row mb-4 gx-3">
        <div className="col-xl-4 col-sm-12 mb-2 d-flex">
          <div className="card w-100 h-100">
            <div className="card-body">
              <div className="card-title vinylCountHeader">
                <h4>Number of records in my collection</h4>
              </div>
              <div className="vinylCount">{myCollectionCount}</div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-12 mb-2 d-flex">
          <div className="card w-100 h-100">
            <div className="card-body">
              <div className="card-title vinylCountHeader">
                <h4>Number of records in my extended collection</h4>
              </div>
              <div className="vinylCount">{extCollectionCount}</div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-12 mb-2 d-flex">
          <div className="card w-100 h-100">
            <div className="card-body">
              <div className="card-title vinylCountHeader">
                <h4>Total records in my collection</h4>
              </div>
              <div className="vinylCount">{totalRecords}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-xl-12 mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="collectionToggle"
              checked={showExtendedOnly}
              onChange={(e) => {
                const checked = e.target.checked;

                setShowExtendedOnly(checked);

                if (checked) {
                  setSearchParams({ extended: "true" });
                } else {
                  setSearchParams({});
                }
              }}
            />

            <label className="form-check-label" htmlFor="collectionToggle">
              Extended Collection Only
            </label>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Filter by Artist</label>
          <div
            className="artist-search-container"
            ref={artistDropdownRef}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search Artists..."
              value={artistSearch}
              onChange={(e) => {
                setArtistSearch(e.target.value);
                setArtistDropdownOpen(true);
              }}
              onFocus={() => {
                setArtistSearch("");
                setSelectedArtist("");
                setArtistDropdownOpen(true);
              }}
            />

            {artistDropdownOpen && (
              <div className="artist-dropdown">
                {filteredArtists.map((artist) => (
                  <button
                    type="button"
                    className="dropdown-item"
                    key={artist}
                    onClick={() => {
                      setSelectedArtist(artist);
                      setArtistSearch(artist);
                      setArtistDropdownOpen(false);
                    }}
                  >
                    {artist}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-4">
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
        <div className="col-md-4">
          <label className="form-label">Filter by Decade</label>
          <select
            className="form-select"
            value={selectedDecade}
            onChange={(e) => setSelectedDecade(e.target.value)}
          >
            <option value="">All Decades</option>
            {decades.map((decade) => (
              <option key={decade} value={decade}>
                {`${decade}s`}
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
          Using [...filteredRecords] preserves the original data.
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
                <div className="card-body d-flex flex-column">
                  {/* 
                    Conditional rendering using a ternary operator.
                    
                    If artwork exists:
                    -> render image
                    
                    If artwork does NOT exist:
                    -> display fallback text
                  */}
                  {record.artwork ? (
                    <Link
                      to={`/vinyl/${record.slug}`}
                      state={{ from: `/vinyl${location.search}` }}
                    >
                      <img
                        // Image source URL from JSON data
                        src={record.artwork}
                        // Bootstrap image/card spacing classes
                        className="card-img-top mb-3 album-cover"
                        // Accessibility text for screen readers
                        alt={`${record.albumName} album cover`}
                        // Lazy loading improves performance
                        // Images load only when needed
                        loading="lazy"
                      />
                    </Link>
                  ) : (
                    // Fallback content when no image exists
                    <Link
                      to={`/vinyl/${record.slug}`}
                      state={{ from: `/vinyl${location.search}` }}
                    >
                      <div className="mb-3 album-cover">
                        Image coming soon...
                      </div>
                    </Link>
                  )}

                  <h5 className="card-subtitle mb-2 text-muted">
                    {record.artist}
                  </h5>

                  <p className="card-text">
                    <strong>Album:</strong>{" "}
                    <Link
                      to={`/vinyl/${record.slug}`}
                      state={{ from: `/vinyl${location.search}` }}
                    >
                      {record.albumName}
                    </Link>
                  </p>

                  <p className="card-text">
                    <strong>Release Year:</strong>
                    {getReleaseYear(record.originalReleaseDate)}
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
                    <strong>Label:</strong>{" "}
                    {Array.isArray(record.label)
                      ? record.label.join(", ")
                      : record.label}
                  </p>
                  {/* <p className="card-text mt-auto text-end mb-0">
                    <Link to={`/vinyl/${record.slug}`}>
                    more...
                    </Link>
                  </p> */}
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
