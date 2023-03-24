import React from 'react'
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ center }) =>{
    const [someState, setSomeState] = useState(false);
    const position = { lat: Number(center.lat), lng: Number(center.lng) };

    return (
        <div className="App">
            <button className="" onClick={() => { someState ? setSomeState(false) : setSomeState(true) }}>Click</button>
            <LoadScript
                id="script-loader"
                googleMapsApiKey=''
            >
                <GoogleMap
                    id='example-map'
                    mapContainerStyle={{
                        height: '500px',
                    }}
                    center={position}
                    zoom={13}
                >
                    {
                        <Marker position={position} />
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default Map;