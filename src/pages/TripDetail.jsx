import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MdOutlineDateRange } from "react-icons/md";
import mapLocations from "../assets/js/mapLocations";
import ContentBlock from "../components/ContentBlock";
import TripReportCard from "../components/TripReportCard";
import tripCardDetails from "../assets/js/tripCards";
import "../../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";
import MarkerClusterGroup from "react-leaflet-cluster";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CLOUD_NAME = "dpir0th3m";

function getCloudinaryUrl(publicId, version, width) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_limit,w_${width},f_auto,q_auto/${version}/${publicId}`;
}
function getCloudinarySrcSet(publicId, version) {
  const widths = [320, 480, 640, 768, 960, 1200];
  return widths
    .map(
      (w) =>
        `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_limit,w_${w}/${version}/${publicId} ${w}w`,
    )
    .join(", ");
}

export default function TripDetail() {
  const { tripId } = useParams();
  const trip = mapLocations.find((item) => item.id === tripId);
  const [slideIndex, setSlideIndex] = useState(1);

const reportCards = tripCardDetails[tripId] || [];

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
    <>
      <Helmet>
        <title>{`Steven Pritchard | ${trip.tripName}`}</title>
        <meta name="description" content={trip.summary} />
        <meta property="og:title" content={trip.tripName} />
        <meta property="og:description" content={trip.summary} />
      </Helmet>

      <div className="container-fluid py-4">
        <div className="row">
          <h1>{trip.tripName}</h1>
          <p>{trip.summary}</p>
        </div>

        <div className="row">
          <div className="col-6">
            {!images.length ? (
              <p>No images available for this trip yet.</p>
            ) : (
              <>
                <div className="position-relative text-center">
                  <img
                    src={getCloudinaryUrl(
                      currentImage.publicId,
                      currentImage.version,
                      768,
                    )}
                    srcSet={getCloudinarySrcSet(
                      currentImage.publicId,
                      currentImage.version,
                    )}
                    sizes="(min-width: 1280px) 576px, (min-width: 780px) calc(43.75vw + 25px), calc(100vw - 24px)"
                    alt={currentImage.alt}
                    fetchPriority="high"
                    decoding="async"
                    width="1400"
                    height="1050"
                    className="img-fluid rounded shadow-sm"
                  />

                  <button
                    type="button"
                    aria-label="Show previous image"
                    className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2"
                    onClick={() => plusSlides(-1)}
                  >
                    ❮
                  </button>

                  <button
                    type="button"
                    aria-label="Show next image"
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
                        src={getCloudinaryUrl(
                          image.publicId,
                          image.version,
                          120,
                        )}
                        srcSet={getCloudinarySrcSet(
                          image.publicId,
                          image.version,
                        )}
                        sizes="(min-width: 1280px) 93px, (min-width: 780px) 7.29vw, calc(16.52vw - 7px)"
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
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
                  <th>
                    <div className="d-flex justify-content-between align-items-center ">
                      <span>Start Date </span>
                      <MdOutlineDateRange
                        size="20"
                        className="text-secondary"
                      />
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between align-items-center ">
                      <span> End Date</span>
                      <MdOutlineDateRange
                        size="20"
                        className="text-secondary"
                      />
                    </div>
                  </th>
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
          <div className="col-6">
             <MapContainer
            className="trip-map"
            center={trip.geocode}
            zoom={9}
            worldCopyJump={true}
          >
            <LayersControl position="topright">
              {/* Base Layers */}
              <LayersControl.BaseLayer checked name="OpenStreetMap">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              {/* Satellite + Labels Base Layer */}
              <LayersControl.BaseLayer name="Satellite + Labels">
                <LayerGroup>
                  {/* Satellite imagery */}
                  <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution="Tiles © Esri"
                  />
                  {/* Labels overlay on top */}
                  <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                    attribution="Labels © Esri"
                  />
                </LayerGroup>
              </LayersControl.BaseLayer>
            </LayersControl>
            <MarkerClusterGroup chunkedLoading>
              {trip.markers?.map((marker, index) => (
                <Marker key={index} position={marker.poi}>
                  <Popup>
                    <div>
                      <h6>{marker.description}</h6>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
          </div>
        </div>
        <div className="row">
          {reportCards.map((reportCards) => (
            <TripReportCard key={reportCards.id} trip={reportCards} />
          ))}
        </div>
      </div>
    </>
  );
}
