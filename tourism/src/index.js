import React from "react";
import ReactDOM from "react-dom/client";
import Touristmap from "./Tourism";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App';
import './index.css';
import { render } from "react-dom"
import Data from "./routes/data"
import Datas from "./routes/datas"

const rootElement = document.getElementById('root');

render(
    <BrowserRouter>
        {/*<Touristmap />*/}
        <Routes>
            <Route path="/" element={<App />}>

                <Route path="datas" element={<Datas />}>
                    <Route
                        index
                        element={
                            <main style={{ padding: "!rem" }}>
                                <p style={{ marginLeft: "50px" }}>Select an tourist location</p>
                            </main>
                        }
                    />
                    <Route path=":dataId" element={<Data />} />
                </Route>                
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p style={{ marginLeft: "50px" }}>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);