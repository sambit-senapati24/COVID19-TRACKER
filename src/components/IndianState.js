import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './Assets/loading.json';
import { FaSortAmountUpAlt, FaSortAmountDown } from 'react-icons/fa';
function IndianState() {

    const [covidData, setCovidData] = useState(null);
    //api call
    let getData = async () => {
        let data = await fetch('https://api.covidindiatracker.com/state_data.json');
        let jsonData = await data.json()
        setCovidData(jsonData);
    };
    //Lotte Animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    let count = 0;
    //to make an api call when our component mounts
    useEffect(() => {
        getData();
    }, []);
    //inline styles
    let state = {
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

    let sortUp = {
        color: 'black',
        marginRight: '10px'
    }

    let sortDown = {
        color: 'black',
    }

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
                        <td><h3>State <br />
                            <span style={sortUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.state < b.state ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={sortDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.state > b.state ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Total<br /> Confirmed<br /> Cases <br />
                            <span style={sortUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.confirmed < b.confirmed ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={sortDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.confirmed > b.confirmed ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Active<br /> Cases<br />
                            <span style={sortUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.active < b.active ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={sortDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.active > b.active ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Total<br /> Deaths<br />
                            <span style={sortUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.deaths < b.deaths ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={sortDown}>
                                <FaSortAmountDown onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.deaths > b.deaths ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                        </h3></td>
                        <td><h3>Total<br /> Recovered<br />
                            <span style={sortUp}>
                                <FaSortAmountUpAlt onClick={() => {
                                    const sortedArray = covidData.concat().sort((a, b) => {
                                        return a.recovered < b.recovered ? -1 : 1;
                                    });
                                    setCovidData(sortedArray)
                                }} />
                            </span>
                            <span style={sortDown}>
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
                            {console.log(covidData)}
                            <td className='serial'>{++count}</td>
                            <td id={`${count}`} style={state}>{ele.state}</td>
                            <td id={`${count}`} style={cases}>{ele.confirmed}</td>
                            <td id={`${count}`} style={active}>{ele.active}</td>
                            <td id={`${count}`} style={deaths}>{ele.deaths}</td>
                            <td id={`${count}`} style={recovered}>{ele.recovered}</td>
                        </tr>)
                    })}
                </table>
            }
        </div>
    )
}

export default IndianState
