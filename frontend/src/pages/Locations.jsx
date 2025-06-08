import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in Leaflet + Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Helper component to fly to a location
function FlyToLocation({ position, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom, { duration: 1.2 });
    }
  }, [position, zoom, map]);
  return null;
}

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("/api/locations")
      .then((res) => {
        setLocations(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not fetch locations.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading locations...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  // Center the map on the selected location, or the first, or a default
  const center = selected
    ? [selected.coordinates.lat, selected.coordinates.lng]
    : locations.length
    ? [locations[0].coordinates.lat, locations[0].coordinates.lng]
    : [20.5937, 78.9629]; // Center of India

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Delivery Locations</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* List on the left */}
        <div className="md:w-1/3 w-full h-[500px] overflow-y-auto space-y-4">
          {locations.map((loc) => (
            <button
              key={loc._id}
              className={`w-full text-left bg-white rounded shadow p-4 border-2 transition ${
                selected && selected._id === loc._id
                  ? "border-onion-dark ring-2 ring-onion-dark"
                  : "border-transparent"
              } hover:border-onion-dark hover:ring-2 hover:ring-onion-dark focus:outline-none`}
              onClick={() => setSelected(loc)}
              aria-pressed={selected && selected._id === loc._id}
            >
              <h2 className="text-lg font-semibold text-onion-dark mb-1">{loc.name}</h2>
              <p className="text-gray-700 mb-1">{loc.description}</p>
              <div className="text-xs text-gray-500">
                <span className="font-semibold">Pincode:</span> {loc.pincode}, {loc.state}
              </div>
            </button>
          ))}
        </div>
        {/* Map on the right */}
        <div className="md:w-2/3 w-full h-[500px] rounded shadow overflow-hidden">
          <MapContainer
            center={center}
            zoom={selected ? 13 : 5}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selected && (
              <FlyToLocation
                position={[selected.coordinates.lat, selected.coordinates.lng]}
                zoom={13}
              />
            )}
            {locations.map((loc) => (
              <Marker
                key={loc._id}
                position={[loc.coordinates.lat, loc.coordinates.lng]}
              >
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  {loc.description}
                  <br />
                  <span className="text-xs text-gray-500">
                    {loc.state}, {loc.country}
                  </span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}