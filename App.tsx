import * as React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
export default function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );

  // return (
  //   <div>
  //     <h1>Hello StackBlitz!</h1>
  //     <Button variant="contained">Hello World</Button>
  //     <p>Start editing to see some magic happen :)</p>
  //   </div>
  // );
}
