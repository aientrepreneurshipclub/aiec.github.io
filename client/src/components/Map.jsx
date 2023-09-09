import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Fragment, memo} from "react";
const containerStyle = {
  width: "400px",
  height: "250px",
};

const Map=memo(function Map({location}){
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_API}`
  })
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
        <Marker position={location}/>
      </GoogleMap>
  ) : <Fragment></Fragment>
})

export default Map
