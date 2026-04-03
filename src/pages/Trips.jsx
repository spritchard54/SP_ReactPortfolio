import { Link } from "react-router-dom";
import "../../node_modules/leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export function Trips() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <h1>Where I've Been</h1>
          <p>
            A friend of mine has a "places you've been map" hanging in his
            house. I liked the idea of having something like that, but wanted
            something a bit more customizable so I built this page. Like most of
            the site, it's still a work in progress. The map and markers are
            enabled by Leaflet which by their own account "is the leading
            open-source JavaScript library for mobile-friendly interactive
            maps." At any rate; I like it. You can hover over the icon in the
            top right corner of the map then toggle between various layers, and
            which markers you want to display on the map. I'm just getting
            started with this and don't have content for every location yet, but
            over time I hope to get there. In the meantime, see if you know
            where Yosemite National Park is and click on 'Details...'.
          </p>
        </div>
        <div className="row>">
          <div className="col-12 100vh">
            <MapContainer
              center={[40.01224336270498, -97.76226241579424]}
              zoom={3}
            >
              <TileLayer
                attribution='&copy;<a href="https://www.openstreetmap.org/#map=4/38.01/-95.84">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}
