import vinylRecords from "../data/vinylRecords.json";
import { useState, useRef, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import CollectionStatCard from "../components/CollectionStatCard";
import CollectionFilter from "../components/CollectionFilter";
import AlbumCard from "../components/AlbumCard";

function Vinyl() {
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDecade, setSelectedDecade] = useState("");
  const [artistSearch, setArtistSearch] = useState("");
  const [artistDropdownOpen, setArtistDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [revealedAlbums, setRevealedAlbums] = useState([]);

  const artistDropdownRef = useRef(null);
  const artistListRef = useRef(null);

  const revealAlbum = (slug) => {
    setRevealedAlbums((prev) => [...prev, slug]);
  };

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

  useEffect(() => {
    // console.log("Current highlighted index:", highlightedIndex);
    const dropdown = artistListRef.current;
    if (dropdown) {
      const activeItem = dropdown.querySelector(".dropdown-item.active");
      if (activeItem) {
        activeItem.scrollIntoView({
          block: "nearest",
        });
      }
    }
  }, [highlightedIndex]);

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
          <CollectionStatCard
            title="Number of records in my collection"
            count={myCollectionCount}
          />
        </div>
        <div className="col-xl-4 col-sm-12 mb-2 d-flex">
          <CollectionStatCard
            title="Number of records in my extended collection"
            count={extCollectionCount}
          />
        </div>
        <div className="col-xl-4 col-sm-12 mb-2 d-flex">
          <CollectionStatCard
            title="Total records in my collection"
            count={totalRecords}
          />
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
          <div className="artist-search-container" ref={artistDropdownRef}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Artists..."
              value={artistSearch}
              onChange={(e) => {
                setArtistSearch(e.target.value);
                setArtistDropdownOpen(true);
                setHighlightedIndex(0);
              }}
              onFocus={() => {
                setArtistSearch("");
                setSelectedArtist("");
                setArtistDropdownOpen(true);
                setHighlightedIndex(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" && filteredArtists.length > 0) {
                  e.preventDefault();
                  setHighlightedIndex((prev) =>
                    Math.min(prev + 1, filteredArtists.length - 1),
                  );
                } else if (e.key === "ArrowUp" && filteredArtists.length > 0) {
                  e.preventDefault();
                  setHighlightedIndex((prev) =>
                    prev === -1
                      ? filteredArtists.length - 1
                      : Math.max(prev - 1, 0),
                  );
                } else if (
                  e.key === "Enter" &&
                  highlightedIndex >= 0 &&
                  highlightedIndex < filteredArtists.length
                ) {
                  e.preventDefault();
                  setSelectedArtist(filteredArtists[highlightedIndex]);
                  setArtistSearch(filteredArtists[highlightedIndex]);
                  setArtistDropdownOpen(false);
                } else if (e.key === "Escape") {
                  setArtistDropdownOpen(false);
                  setHighlightedIndex(-1);
                }
              }}
            />

            {artistDropdownOpen && (
              <div className="artist-dropdown" ref={artistListRef}>
                {filteredArtists.map((artist, index) => (
                  <button
                    type="button"
                    className={`dropdown-item ${
                      index === highlightedIndex ? "active" : ""
                    }`}
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
        <CollectionFilter
          label="Filter by Genre"
          value={selectedGenre}
          onChange={setSelectedGenre}
          options={genres}
          defaultLabel={"All Genres"}
        />
        <CollectionFilter
          label="Filter by Decade"
          value={selectedDecade}
          onChange={setSelectedDecade}
          options={decades}
          defaultLabel={"All Decades"}
          isDecade={true}
        />
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-2">
        {[...filteredRecords]
          .sort((a, b) =>
            a.artist
              .replace(/^The /i, "")
              .localeCompare(b.artist.replace(/^The /i, "")),
          )
          .map((record) => (
            <AlbumCard
              record={record}
              isRevealed={revealedAlbums.includes(record.slug)}
              revealAlbum={revealAlbum}
              locationSearch={location.search}
              releaseYear={getReleaseYear}
              key={record._id.$oid}
            />
          ))}
      </div>
    </div>
  );
}

export default Vinyl;
