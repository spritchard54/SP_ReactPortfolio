import vinylRecords from "../assets/js/vinylRecords.json";

function Vinyl() {
  return (
    <div className="container my-4">
      <h1>Vinyl Collection</h1>
      <p>A small selection of albums from my personal record collection.</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-2">
        {[...vinylRecords]
          .sort((a, b) =>
            a.artist
              .replace(/The /i, "")
              .localeCompare(b.artist.replace(/^The /i, "")),
          )
          .map((record) => (
            <div className="col" key={record._id.$oid}>
              <div className="card h-100">
                <div className="card-body">
                  {record.artwork ? (
                    <img
                      src={record.artwork}
                      className="card-img-top mb-3"
                      alt="..."
                      loading="lazy"
                    />
                  ) : (
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
                    {Array.isArray(record.genre) ? (
                      record.genre.map((genre) => (
                        <span
                          key={genre}
                          className="badge text-bg-secondary me-2"
                        >
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

export default Vinyl;
