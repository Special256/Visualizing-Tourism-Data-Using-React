import React from 'react';
import { useParams } from "react-router-dom"
import { getData } from "../data";
import Map from "./map"

export default function Data() {
    let params = useParams();
    let data = getData(parseInt(params.dataId, 10));
    let lat = data.위도
    let lng = data.경도
    const position = {
        lat,
        lng
    }

    return (
        <main style={{ padding: "1rem" , width: '100%'}}>
            <div className="container">
                <div className = "result">
                    <h2 style={{ marginLeft: "20px" }}>Search Results</h2>
                    <p style={{ marginLeft: "20px" }}>
                        {Object.keys(data).map((head) =>
                            <tr>{head} : {data[head]}</tr>
                        )}
                    </p>
                </div>
                <div className="map">
                    <h2 style={{ marginLeft: "20px" }}>Map</h2>
                    <Map center={ position }/>
                </div>
            </div>
        </main>
    )
}