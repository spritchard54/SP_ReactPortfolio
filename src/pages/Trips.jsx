import { Link } from "react-router-dom";
import "../../node_modules/leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import mapLocations from "../assets/js/mapLocations";
import MarkerClusterGroup from "react-leaflet-cluster";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";

const iconMap = {
  skiing: new L.Icon({
    iconUrl: "/images/ski.png",
    iconSize: [40, 40],
  }),
  np: new L.Icon({
    iconUrl: "/images/nps.png",
    iconSize: [60, 55],
  }),
  // beach: new L.Icon({
  //   iconUrl: "/icons/yellow-marker.png",
  //   iconSize: [25, 41],
  //   // iconAnchor: [12, 41],
  // }),
};

export function Trips() {
  // acc = accumulator
  const groupedMarkers = mapLocations.reduce((acc, marker) => {
    const category = marker.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(marker);
    return acc;
  }, {});

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
        <div className="row">
          <div className="col-12 100vh">
            <MapContainer
              center={[40.01224336270498, -97.76226241579424]}
              zoom={4}
            >
              <TileLayer
                attribution='&copy;<a href="https://www.openstreetmap.org/#map=4/38.01/-95.84">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <LayersControl position="topright">
                {/* Dynamically create layers per category */}
                {Object.keys(groupedMarkers).map((category) => (
                  <LayersControl.Overlay key={category} name={category} checked={category === "National Parks"} >
                    <LayerGroup>
                      <MarkerClusterGroup chunkedLoading>
                        {groupedMarkers[category].map((marker) => (
                          <Marker
                            key={marker.id}
                            position={marker.geocode}
                            icon={iconMap[marker.iconType] || iconMap.default}
                          >
                            <Popup>{marker.popup}</Popup>
                          </Marker>
                        ))}
                      </MarkerClusterGroup>
                    </LayerGroup>
                  </LayersControl.Overlay>
                ))}
              </LayersControl>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}
