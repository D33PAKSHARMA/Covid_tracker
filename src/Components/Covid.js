import React, { useEffect, useState } from 'react'
import './App.css'

function Covid() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {

        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            // console.log(res);
            const Data = await res.json();
            // console.log(Data.statewise[0]);
            setData(Data.statewise[0]);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className='main_header'>
                <img src="https://cdn-icons-png.flaticon.com/512/2150/2150463.png" alt="LIVE" />
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>

                <div className='main_container'>

                    <ul >

                        <li className='card_main'>
                            <div>
                                <div>
                                    <p className='card_name'><span>TOTAL </span>Country</p>
                                    <p className='card_total'>India</p>
                                </div>
                            </div>

                        </li>
                        <li className='card_main'>
                            <div >
                                <div style={{ color: 'green' }}>
                                    <p className='card_name'><span> TOTAL </span>RECOVERED</p>
                                    <p className='card_total'>{data.recovered}</p>
                                </div>
                            </div>

                        </li><li className='card_main'>
                            <div>
                                <div>
                                    <p className='card_name'><span>TOTAL </span>CONFIRMED</p>
                                    <p className='card_total'>{data.confirmed}</p>
                                </div>
                            </div>

                        </li><li className='card_main'>
                            <div>
                                <div>
                                    <p className='card_name'><span>TOTAL </span>DEATH</p>
                                    <p className='card_total'>{data.deaths}</p>
                                </div>
                            </div>

                        </li><li className='card_main'>
                            <div>
                                <div>
                                    <p className='card_name'><span>TOTAL </span>ACTIVE</p>
                                    <p className='card_total'>{data.active}</p>
                                </div>
                            </div>

                        </li>
                        <li className='card_main'>
                            <div>
                                <div>
                                    <p className='card_name'><span>LAST </span>UPDATA</p>
                                    <p className='card_total'>{data.lastupdatedtime}</p>
                                </div>
                            </div>

                        </li>


                    </ul>

                </div>

            </div>
        </>
    )
}

export default Covid;