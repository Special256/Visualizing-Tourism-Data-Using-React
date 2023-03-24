import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import tourismData from "./tourismData";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { Outlet, Link } from "react-router-dom"
import Header from './Header'
import Loading from './Loading'
import Footer from './Footer'
import { getDatas } from "./data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function App() {
    const datas = getDatas();
    let tdata = datas.records

    const listItems = tourismData.fields.map((ids) =>
        <p>{ids.id}</p>
    );

    const arr = tourismData.records.map((val) => val.관광지구분)
    const red = tdata.reduce((acc, cur) => { 
        const currentDate = new Date(cur.지정일자)
        const year = currentDate.getFullYear();

        if (acc[year]) {
            acc[year] += 1;
        } else {
            acc[year] = 1;
        }

        

        return acc;
    }, {})

    //console.log(red)

    const data = arr.filter(arry => arry === '관광지')
    const data2 = arr.filter(arry => arry === '관광단지')

    const [comparedData, setComparedData] = useState({});
    const [dates, setDates] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setComparedData({
                labels: ['관광지','관광단지'],
                datasets: [
                    {
                        label: 'Point of Interest',
                        data: [data.length, data2.length],
                        backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)'/*, 'rgb(255, 205, 86)'*/ ],
                        hoverOffset: 4
                    }
                ]
            });
            setDates({
                labels: Object.keys(red),
                datasets: [
                    {
                        label: 'Yearly New Tourist Locations',
                        data: Object.values(red),
                    }
                ]
            });
        };
        fetchData()
    }, []);

    const options_doughnut = {
        responsive: true,
        plugins: {
            legend: { display: true, position: "bottom" },
            title: {
                display: true,
                text: '관광지, 관광단지',
                fontSize: 25,
            },
        },
    };

    const options_line = {
        responsive: true,
        plugins: {
            legend: { display: true, position: "bottom" },
            title: {
                display: true,
                text: "관광지별 지정일자",
                fontsize: 25
            },
        },
    };

    setTimeout(function () {
        setLoaded(true);
    }, 100);

    //console.log(tdata[0])
    return (
      <section>
        <Header></Header>
          <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }}
          >
            {" "}
                <Link to="/datas">
                    <h1 style={{
                        marginLeft: "100px",
                        fontSize : "30px",
                    }}>
                        전국관광지정보 검색
                    </h1>
                </Link>
          </nav>
            <Outlet />
            {loaded ? ( <div>
                
            <div className = "container">
                <div className="pie">
                    <h1>Doughnut graph</h1>
                    <Doughnut options={options_doughnut} data={comparedData} />
                </div>
                <div className = "line">
                    <h1>Line graph</h1>
                     {/* red -> line chart  */}
                    <Line options={options_line} data={dates} />
                </div>
             </div>
                <div style={{ clear: 'both' }}></div>
          <br/>
          <div className="table-class">
              <table>
                  <tr> {listItems.map((head) => 
                      <th>{head}</th>
                  )}
                  </tr>
                  {datas.records.map((record) => {
                      return (
                          <tr >
                              {Object.keys(record).map((k) => (
                                  <td>{record[k]}</td>
                              ))}
                          </tr>
                      )
                  })}
              </table>
          </div>
          <Footer></Footer></div>
            ) : (
                <Loading />
            )}
    </section>
    );
}

export default App;
