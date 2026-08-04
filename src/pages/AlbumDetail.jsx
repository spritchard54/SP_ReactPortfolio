import vinylRecords from "../assets/js/vinylRecords.json";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AlbumDetail() {
  const { albumSlug } = useParams();

  const album = vinylRecords.find((item) => item.slug === albumSlug);

  if (!album) {
    return (
      <div className="container py-4">
        <h1>Album not found</h1>
        <p>No album matches the supplied ID.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Steven Pritchard | ${album.albumName}`}</title>
        <meta name="description" content={""} />
        <meta property="og:title" content={album.albumName} />
        <meta property="og:description" content={""} />
      </Helmet>

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 col-md-3">
            <img
              src={album.artwork}
              alt={`${album.albumName} album cover`}
              className="img-fluid album-artwork"
            />
          </div>

          <div className="col-12 col-md-9">
            <h3 className="fw-bold">{album.artist}</h3>
            <h5>
              <span className="fw-bold">Album:</span> {album.albumName}
            </h5>
            <h5>
              <span className="fw-bold">Label:</span>{" "}
              {Array.isArray(album.label)
                ? album.label.join(", ")
                : album.label}
            </h5>
            <h5>
              <span className="fw-bold">Genre:</span>{" "} 
              {Array.isArray(album.genre)
                ? album.genre.join(", ")
                : album.genre}
            </h5>
            <h5>
              <span className="fw-bold">Style:</span>{" "}
              {Array.isArray(album.style)
                ? album.style.join(", ")
                : album.style}
            </h5>
            <h5>
              <span className="fw-bold">Discogs:</span>{" "}
              <a
                href={album.discogsLink}
                target="_blank"
                rel="noopener noreferer"
              >
                View on Discogs
              </a>
            </h5>
            <Link to={"/vinyl"}>Back to the collection...</Link>
          </div>
        </div>

        <div className="row mt-4">
          <h5>Track Listings</h5>
          {Object.entries(album.sides).map(([side, tracks]) => (
            <div className="col-12 col-md-6 mb-4" key={side}>
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">Side {side.toUpperCase()}</h3>

                  <ol className="mb-0">
                    {tracks.map((track, index) => (
                      <li key={`${side}-${index}`}>{track}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <h5>Pressing Notes:</h5>

          {album.pressing?.notes?.length > 0 ? (
            <ul className="ms-4">
              {album.pressing.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          ) : (
            <p>No pressing notes available.</p>
          )}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h5>User Notes:</h5>

            {album.userNotes?.length > 0 ? (
              <ul className="ms-4">
                {album.userNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            ) : (
              <p>No user notes added.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
