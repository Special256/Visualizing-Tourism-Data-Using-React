import React, { Component } from 'react';
import { NavLink, Outlet, Link, useSearchParams } from "react-router-dom"
import { getDatas } from "../data";


function Datas() {
    const tmdata = getDatas()
    let tdata = tmdata.records
    let [searchParams, setSearchParams] = useSearchParams()

    return (

        <div style={{ display: "flex" }}>
            <nav className="search-box"
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value
                        if (filter) {
                            setSearchParams({ filter })
                        }
                        else {
                            setSearchParams({})
                        }
                    }}
                />

                {tdata
                    .filter((data) => {
                        let filter = searchParams.get("filter")
                        if (!filter) return true
                        let records = data.관광지명.toLowerCase()
                        return records.startsWith(filter.toLowerCase())
                    })
                    .map((data) => (
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : "",
                                };
                            }}
                            to={`/datas/${data.면적}`}
                        >
                            <div >
                                {data.관광지명} 
                            </div>
                        </NavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    );
}

export default Datas;