import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './Assets/IndianFlag.json';
import loadingAnimation from './Assets/loading.json';
import { Link } from 'react-router-dom';

function India() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions01 = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    let currentDateInfo = new Date();
    const [covidData, setCovidData] = useState(null);
    const month = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };
    //api call
    let getData = async () => {
        let data = await fetch('https://corona.lmao.ninja/v2/countries/India?yesterday=true&strict=true&query');
        let jsonData = await data.json()
        console.log(jsonData)
        setCovidData(jsonData);
    };
    //to make an api call when our component mounts
    useEffect(() => {
        getData();
    }, []);

    let inlineStyle = {
        color: '#ADFF2F'
    };

    let casesInlineStyle = {
        color: '#b8860b'
    };

    let deathInlineStyle = {
        color: '#ff0000'
    };
    let recoveredInlineStyle = {
        color: '#ADFF2F',
    };

    return (
        <div>
            {covidData == null ? <><Lottie
                options={defaultOptions01}
                height={200}
                width={200}
            /></> :
                <div>
                    <p>{`Last Updated: ${month[currentDateInfo.getMonth() + 1]} ${currentDateInfo.getDate()}, ${currentDateInfo.getFullYear()}`}</p>
                    <div className='casesInformation'>
                        <h1><Lottie
                            options={defaultOptions}
                            height={200}
                            width={200}
                        />India</h1>
                        <h1>Coronavirus Cases : </h1>
                        <h1 style={casesInlineStyle}>{covidData ? covidData.active : null}</h1>
                        <h1>Deaths : </h1>
                        <h1 style={deathInlineStyle}>{covidData ? covidData.deaths : null}</h1>
                        <h1>Recovered :</h1>
                        <h1 style={recoveredInlineStyle}  >{covidData ? covidData.recovered : null}</h1>
                        <Link to='india/states' style={inlineStyle}>
                            <p>View by states</p>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default India
