import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './Assets/coronavirus.json';

function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    let currentDateInfo = new Date();
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
    const [covidData, setCovidData] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    //Api call
    let getData = async () => {
        let data = await fetch('https://corona.lmao.ninja/v2/all?yesterday')
        let jsonData = await data.json()
        setCovidData(jsonData)
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
    let linkInlineStyle = {
        color: 'inherit',
    };

    return (
        <div className='home'>
            <div className='heading'>
                <h3>COVID-19 NOVEL CORONAVIRUS PANDEMIC INFO</h3>
            </div>
            <p>{`Last Updated: ${month[currentDateInfo.getMonth() + 1]} ${currentDateInfo.getDate()}, ${currentDateInfo.getFullYear()}`}</p>
            <div className='casesInformation'>
                <Lottie
                    options={defaultOptions}
                    height={320}
                    width={400}
                />
                <Link style={linkInlineStyle} to='/symptoms'><h4>Symptoms</h4></Link>
                <h1>Coronavirus Cases : </h1>
                <h1 style={casesInlineStyle}>{covidData ? covidData.cases : null}</h1>
                <h1>Deaths : </h1>
                <h1 style={deathInlineStyle}>{covidData ? covidData.deaths : null}</h1>
                <h1>Recovered :</h1>
                <h1 style={recoveredInlineStyle}  >{covidData ? covidData.recovered : null}</h1>
            </div>
        </div>
    )
}

export default Home
