import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";

import { getMapCenter, distanceInMiles, getStars } from "../helper";

export const customIcon = i =>
  new L.Icon({
    iconUrl: require(`../assets/marker-icons/number_${i}.png`),
    iconSize: [35, 45]
  });

const AddressMap = ({ restaurants }) => {
  const [centerLat, centerLon] = getMapCenter(restaurants);

  const markers = restaurants.map((restaurant, i) => {
    return (
      <Marker
        key={restaurant.id}
        position={[
          restaurant.coordinates.latitude,
          restaurant.coordinates.longitude
        ]}
        icon={customIcon(i + 1)}
      >
        <Popup>
          <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
            <p style={{ margin: "0", padding: "0", fontWeight: "bold" }}>
              {restaurant.name}
            </p>
          </a>
          <img
            src={getStars(restaurant)}
            alt="star rating"
            style={{ width: "75px", height: "auto", paddingTop: "0.25rem" }}
          />
          <p style={{ margin: "0", padding: "0" }}>
            {distanceInMiles(restaurant.distance)} mi
          </p>
        </Popup>
      </Marker>
    );
  });

  return (
    <Map
      center={[centerLat || 25, centerLon || -120]}
      zoom={10}
      maxZoom={15}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {markers}
    </Map>
  );
};

AddressMap.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default AddressMap;
