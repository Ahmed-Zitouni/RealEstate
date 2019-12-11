import React, { useState, useContext, useEffect } from 'react'
import { GoogleMap , withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import { FaToilet, FaBed, FaChevronRight } from 'react-icons/fa';
import { HouseContext } from '../context/HouseContext';

import MapStyles from '../utilities/MapStyles'
const APIKey = "AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c";

function Map() {
    const {houses, dispatch} = useContext(HouseContext)
    const [selectedHouse, setSelectedHouse] = useState(null);

    const MoreInfo = (e) => {
        dispatch({type:'HOUSE_INFO', dash: false, Item: selectedHouse.id})
    }
    return (
        <GoogleMap 
            defaultZoom={11}
            defaultCenter={{lat: 40.759350, lng: -74.151770}}
            defaultOptions={{styles:MapStyles}}
        >
        {houses.Homes.map((home) => (
        <Marker
          key={home.zpid}
          position={{
            lat: home.latitude,
            lng: home.longitude
          }}
          
          onMouseOver={() => {
            setSelectedHouse(home);
            }}
          /*
          icon={{
            url: `/skateboarding.svg`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
          */
        />
         ))}
         {selectedHouse && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedHouse(null);
          }}

          position={{
            lat: selectedHouse.latitude,
            lng: selectedHouse.longitude
          }}
        >
        <div onMouseLeave={() => { setSelectedHouse(null);}}
            onClick = {(e) => MoreInfo(e)}
            className = "MapInfo">

            <img src={selectedHouse.images[0]} alt={""}/>
            <div>
                <h1>{selectedHouse.street}</h1>
                <h1>${selectedHouse.rent}</h1>
                <ul>
                    <li><FaBed style ={Iconsbed}/> {selectedHouse.bedrooms}</li>
                    <li><FaToilet style ={Iconsto}/> {selectedHouse.bathrooms}</li>
                </ul>
            </div>
        </div>
        </InfoWindow>)}
        </GoogleMap>
    )
}

const MapWrapped = withScriptjs(withGoogleMap(Map))
export default function GMap () {
  const {houses, dispatch} = useContext(HouseContext)

  let DisplayClose = "flex";

  DisplayClose = !houses.Display.DashBoard ? DisplayClose = "flex" : DisplayClose = "none" 

  let CloseButton = {
    display: DisplayClose,
  }
  console.log("Done", CloseButton);
  const OpenDash = () => {
    dispatch({type:'HOUSE_INFO', dash: true, Item: 0})
  }
    return (
        <div className="GMap">
          <div className="HouseInfo-close" style={CloseButton} onClick={() => OpenDash()}>
            <FaChevronRight style={Icons} />
          </div>
          <MapWrapped
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APIKey}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
    );
}
const Icons = {
  style: { verticalAlign: 'middle' },
  padding: '0 0.2em 0 0.2em',
  width: '1.3rem',
  height: '1.3rem',
  color: '#a3abab'
}
const Iconsbed = {
    style: { verticalAlign: 'middle' },
    padding: '0 0.2em 0 0.2em',
    width: '1.3rem',
    height: '0.9rem',
    color: '#a3abab',
}
const Iconsto = {
  style: { verticalAlign: 'middle' },
  padding: '0 0.2em 0 0.2em',
  width: '1.1rem',
  height: '1.1rem',
  color: '#a3abab',
}
