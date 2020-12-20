import React, { useState, useEffect } from 'react'
import { FaSortAmountUpAlt, FaSortAmountDown } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from './Assets/loading.json';

function WorldTracker() {
    const [covidData, setCovidData] = useState(null);
    //api call
    let getData = async () => {
        let data = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
        let jsonData = await data.json()
        setCovidData(jsonData);
    };
    let count = 0;

    //to make an api call when our component mounts
    useEffect(() => {
        getData();
    }, []);
    //inline styles
    let country = {
        fontWeight: 'bold',
    };
    let cases = {
        color: 'black',
        fontWeight: 'bold',
    }
    let active = {
        color: '#b8860b',
        fontWeight: 'bold',
    };
    let deaths = {
        color: '#ff0000',
        fontWeight: 'bold',
    };
    let recovered = {
        color: '#ADFF2F',
        fontWeight: 'bold',
    };
    let thead = {
        backgroundColor: '#e3dac9',
    }

    let styleUp = {
        color: 'black',
        marginRight: '10px'
    }

    let styleDown = {
        color: 'black',
    }
    //Lotte Animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            {covidData == null ? <><Lottie
                options={defaultOptions}
                height={200}
                width={200}
            /></> :
                <table>
                    <tr style={thead}>
                        <td className='serial'>#</td>
                        <td><h3>Countries <br />
                            <span style={styleUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.country < b.country ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={styleDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.country > b.country ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Total<br /> Confirmed<br /> Cases <br />
                            <span style={styleUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.cases < b.cases ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={styleDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.cases > b.cases ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Active<br /> Cases<br />
                            <span style={styleUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.active < b.active ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={styleDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.active > b.active ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Total<br /> Deaths<br />
                            <span style={styleUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.deaths < b.deaths ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={styleDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.deaths > b.deaths ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Total<br /> Recovered<br />
                            <span style={styleUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.recovered < b.recovered ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={styleUp}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.recovered > b.recovered ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                    </tr>
                    {covidData.map((ele) => {
                        return (<tr>
                            <td className='serial'>{++count}</td>
                            <td style={country}>{ele && ele.country}</td>
                            <td style={cases}>{ele && ele.cases}</td>
                            <td style={active}>{ele && ele.active}</td>
                            <td style={deaths}>{ele && ele.deaths}</td>
                            <td style={recovered}>{ele && ele.recovered}</td>
                        </tr>)
                    })}
                </table>
            }
        </div>
    )
}

export default WorldTracker
