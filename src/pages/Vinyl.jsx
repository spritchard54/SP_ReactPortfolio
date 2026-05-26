import { vinylRecords } from "../assets/js/vinylRecords";

function Vinyl() {
  return (
    <div className="container my-4">
      <h1>Vinyl Collection</h1>
      <p>A small selection of albums from my personal record collection.</p>
      <div className="row">
        {vinylRecords.map((record) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={record._id.$oid}>
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
                  <span>Image coming soon...</span>
                )}
                <h3 className="card-title">{record.title}</h3>
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
