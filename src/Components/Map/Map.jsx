// Map.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ center, zoom, markerPosition }) => {
  return (
    <LoadScript googleMapsApiKey="TU_API_KEY">
      <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={zoom}>
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
