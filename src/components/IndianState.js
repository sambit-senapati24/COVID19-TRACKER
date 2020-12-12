import React, { useState, useEffect } from 'react';
import Loading from './Assets/loading-gear.gif';
import { FaSortAmountUpAlt, FaSortAmountDown } from 'react-icons/fa';
function IndianState() {
    const [covidData, setCovidData] = useState(null);
    //api call
    let getData = async () => {
        let data = await fetch('https://api.covidindiatracker.com/state_data.json');
        let jsonData = await data.json()
        setCovidData(jsonData);
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
    let sortIcon = {
        marginLeft: '0px',
    }
    return (
        <div>
            {covidData == null ? <><img src={Loading} alt='Loading Gear' /><span>Loading...</span></> :
                <table>
                    <tr style={thead}>
                        <td className='serial'>#</td>
                        <td><h3>State <br /> <FaSortAmountUpAlt onClick={() => {
                            const sortedArray = covidData.concat().sort((a, b) => {
                                return a.state < b.state ? -1 : 1;
                            });
                            setCovidData(sortedArray)
                        }} />
                            <FaSortAmountDown onClick={() => {
                                const sortedArray = covidData.concat().sort((a, b) => {
                                    return a.state > b.state ? -1 : 1;
                                });
                                setCovidData(sortedArray)
                            }} /></h3></td>
                        <td><h3>Total<br /> Confirmed<br /> Cases <br /><FaSortAmountUpAlt onClick={() => {
                            const sortedArray = covidData.concat().sort((a, b) => {
                                return a.confirmed < b.confirmed ? -1 : 1;
                            });
                            setCovidData(sortedArray)
                        }} />
                            <FaSortAmountDown onClick={() => {
                                const sortedArray = covidData.concat().sort((a, b) => {
                                    return a.confirmed > b.confirmed ? -1 : 1;
                                });
                                setCovidData(sortedArray)
                            }} /></h3></td>
                        <td><h3>Active<br /> Cases<br /><FaSortAmountUpAlt onClick={() => {
                            const sortedArray = covidData.concat().sort((a, b) => {
                                return a.active < b.active ? -1 : 1;
                            });
                            setCovidData(sortedArray)
                        }} />
                            <FaSortAmountDown onClick={() => {
                                const sortedArray = covidData.concat().sort((a, b) => {
                                    return a.active > b.active ? -1 : 1;
                                });
                                setCovidData(sortedArray)
                            }} /></h3></td>
                        <td><h3>Total<br /> Deaths<br /><FaSortAmountUpAlt onClick={() => {
                            const sortedArray = covidData.concat().sort((a, b) => {
                                return a.deaths < b.deaths ? -1 : 1;
                            });
                            setCovidData(sortedArray)
                        }} />
                            <FaSortAmountDown onClick={() => {
                                const sortedArray = covidData.concat().sort((a, b) => {
                                    return a.deaths > b.deaths ? -1 : 1;
                                });
                                setCovidData(sortedArray)
                            }} /></h3></td>
                        <td><h3>Total<br /> Recovered<br /><FaSortAmountUpAlt onClick={() => {
                            const sortedArray = covidData.concat().sort((a, b) => {
                                return a.recovered < b.recovered ? -1 : 1;
                            });
                            setCovidData(sortedArray)
                        }} />
                            <FaSortAmountDown onClick={() => {
                                const sortedArray = covidData.concat().sort((a, b) => {
                                    return a.recovered > b.recovered ? -1 : 1;
                                });
                                setCovidData(sortedArray)
                            }} /></h3></td>
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
