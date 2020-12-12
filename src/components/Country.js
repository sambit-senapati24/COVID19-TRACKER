import React, { useState, useEffect } from 'react'
import Loading from './Assets/loading-gear.gif'
function Country(props) {
    let param = props.match.params.country
    const [covidData, setCovidData] = useState(null);
    const countryCode = {
        Asia : 0,
        NorthAmerica : 1,
        SouthAmerica : 2,
        Europe : 3,
        Africa : 4,
        Australia : 5
    };
    let code = countryCode[`${param}`]
    console.log(code)
    //api call
    let getData = async () => {
        let data = await fetch('https://corona.lmao.ninja/v2/continents?yesterday=true&sort');
        let jsonData = await data.json()
        setCovidData(jsonData);
    };
    let count = 0;
    //to make an api call when our component mounts
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {covidData == null ? <><img src={Loading} alt='Loading Gear'/><span>Loading...</span></>:
            <>{covidData[code].countries.map((country) => {
                return (<li><span>{country}</span></li>)
                })}
            </>
            }
        </div>
    )
}

export default Country
