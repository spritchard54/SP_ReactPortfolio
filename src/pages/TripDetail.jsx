import { useState } from "react";
import { useParams } from "react-router-dom";
import mapLocations from "../assets/js/mapLocations";

const CLOUD_NAME = "dpir0th3m";

function getCloudinaryUrl(publicId, version, width) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_scale,w_${width},f_auto,q_auto/${version}/${publicId}`;
}

export function TripDetail() {
  const { tripId } = useParams();
  const trip = mapLocations.find((item) => item.id === tripId);
  const [slideIndex, setSlideIndex] = useState(1);
  if (!trip) {
    return <h1>Trip not found</h1>;
  }

  const images = trip.images || [];

  function plusSlides(n) {
    if (!images.length) return;

    let newIndex = slideIndex + n;

    if (newIndex > images.length) {
      newIndex = 1;
    }

    if (newIndex < 1) {
      newIndex = images.length;
    }

    setSlideIndex(newIndex);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  const currentImage = images.length ? images[slideIndex - 1] : null;
  
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <h1>{trip.tripName}</h1>
        <p>{trip.summary}</p>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 order-2 order-md-1">
          {trip.sections?.map((section, index) => (
            <div key={index} className="mb-4">
              <h3>{section.heading}</h3>
              {section.paragraphs?.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="col-12 col-md-6 order-1 order-md-2">
          {!images.length ? (
            <p>No images available for this trip yet.</p>
          ) : (
            <>
              <div className="position-relative text-center">
                <img
                  // src={currentImage.src}
                  // alt={currentImage.alt}
                  // className="img-fluid rounded shadow-sm"
                  src={getCloudinaryUrl(
                    currentImage.publicId,
                    currentImage.version,
                    900,
                  )}
                  srcSet={`
    ${getCloudinaryUrl(currentImage.publicId, currentImage.version, 500)} 500w,
    ${getCloudinaryUrl(currentImage.publicId, currentImage.version, 900)} 900w,
    ${getCloudinaryUrl(currentImage.publicId, currentImage.version, 1400)} 1400w
  `}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={currentImage.alt}
                  className="img-fluid rounded shadow-sm"
                />

                <button
                  type="button"
                  className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2"
                  onClick={() => plusSlides(-1)}
                >
                  ❮
                </button>

                <button
                  type="button"
                  className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2"
                  onClick={() => plusSlides(1)}
                >
                  ❯
                </button>
              </div>

              <p className="my-2 text-center ">{currentImage.alt}</p>

              <div className="row g-1">
                {images.map((image, index) => (
                  <div key={index} className="col-2">
                    <img
                      // src={image.src}
                      // alt={image.alt}
                      src={getCloudinaryUrl(image.publicId, image.version, 200)}
                      alt={image.alt}
                      className={`img-fluid rounded trip-thumb ${
                        slideIndex === index + 1 ? "active-thumb" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => currentSlide(index + 1)}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{trip.startDate}</td>
                <td>{trip.endDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
