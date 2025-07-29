import React , { useState }from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Location } from '../types';
import { MapPin, Satellite } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapViewProps {
  location: Location;
}

const SATELLITE_URL = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const SATELLITE_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

const MapView: React.FC<MapViewProps> = ({ location }) => {
  const [satellite, setSatellite] = useState(false);
  return (
    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 mb-8 overflow-hidden shadow-2xl border border-slate-700">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-emerald-400 to-green-500 p-4 rounded-2xl mr-4 shadow-lg">
            <Satellite className="h-8 w-8 text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Satellite Location View</h2>
            <p className="text-emerald-300 text-sm">Your farming coordinates</p>
          </div>

          <button
            className={`ml-auto px-4 py-2 rounded-lg font-semibold transition ${
              satellite
                ? "bg-emerald-500 text-white"
                : "bg-white text-emerald-700 hover:bg-emerald-100"
            }`}
            onClick={() => setSatellite((s) => !s)}
            aria-pressed={satellite}
          >
            {satellite ? "Show Map" : "Show Satellite"}
          </button>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
          <div className="h-80 md:h-96">
            <MapContainer
              center={[location.latitude, location.longitude]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              className="rounded-2xl"
            >
              {satellite ? (
                <TileLayer
                  attribution={SATELLITE_ATTRIBUTION}
                  url={SATELLITE_URL}
                />
              ) : (
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              )}
              <Marker position={[location.latitude, location.longitude]}>
                <Popup>
                  <div className="text-center p-2">
                    <div className="flex items-center justify-center mb-2">
                      <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                      <strong className="text-gray-800">Your Farm Location</strong>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Latitude: {location.latitude.toFixed(6)}</p>
                      <p>Longitude: {location.longitude.toFixed(6)}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        
        <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-center text-white">
            <MapPin className="h-5 w-5 mr-2 text-emerald-400" />
            <span className="text-sm font-medium">
              Coordinates: {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;