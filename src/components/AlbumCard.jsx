import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function AlbumCard({ record, isRevealed, revealAlbum, locationSearch, releaseYear }) {
  return (
    <div className="col" >
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          {record.artwork ? (
            record.sensitiveContent && !isRevealed ? (
              // Sensitive artwork that hasn't been revealed
              <button
                type="button"
                className="sensitive-artwork-button mb-3"
                onClick={() => revealAlbum(record.slug)}
                aria-label={`Reveal sensitive artwork for ${record.albumName}`}
              >
                <img
                  src={record.artwork}
                  className="card-img-top album-cover sensitive-blur"
                  alt=""
                  loading="lazy"
                />
                <span className="sensitive-artwork-overlay">
                  Sensitive Content
                  <small>Click to Reveal</small>
                  <FaEye size={20} aria-hidden="true" />
                </span>
              </button>
            ) : (
              // Normal artwork or previously revealed artwork
              <Link
                to={`/vinyl/${record.slug}`}
                state={{ from: `/vinyl${locationSearch}` }}
              >
                <img
                  src={record.artwork}
                  className="card-img-top mb-3 album-cover"
                  alt={`${record.albumName} album cover`}
                  loading="lazy"
                />
              </Link>
            )
          ) : (
            // Existing fallback when no artwork is available
            <Link
              to={`/vinyl/${record.slug}`}
              state={{ from: `/vinyl${locationSearch}` }}
            >
              <div className="mb-3 album-cover">Image coming soon...</div>
            </Link>
          )}

          <h5 className="card-subtitle mb-2 text-muted">{record.artist}</h5>

          <p className="card-text">
            <strong>Album:</strong>{" "}
            <Link
              to={`/vinyl/${record.slug}`}
              state={{ from: `/vinyl${locationSearch}` }}
            >
              {record.albumName}
            </Link>
          </p>

          <p className="card-text">
            <strong>Release Year: </strong>
            {releaseYear(record.originalReleaseDate)}
          </p>

          <p className="card-text">
            <strong>Genre:</strong>{" "}
            {Array.isArray(record.genre) ? (
              record.genre.map((genre) => (
                <span key={genre} className="badge text-bg-secondary me-2">
                  {genre}
                </span>
              ))
            ) : (
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
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
