import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Assets/39103-no-shaking-hands.json'
import animationData01 from './Assets/39108-man-wearing-mask.json';
import animationData02 from './Assets/39101-hand-washing.json';
import animationData03 from './Assets/39105-person-with-fever.json';

function Symptoms() {
    const style = {
        textAlign: 'left',
        color: 'rgb(82, 78, 78)'
    };
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
        animationData: animationData01,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions02 = {
        loop: true,
        autoplay: true,
        animationData: animationData02,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions03 = {
        loop: true,
        autoplay: true,
        animationData: animationData03,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <div className='lottie'>
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                />
                <Lottie
                    options={defaultOptions01}
                    height={200}
                    width={200}
                />
                <Lottie
                    options={defaultOptions02}
                    height={200}
                    width={200}
                />
                <Lottie
                    options={defaultOptions03}
                    height={200}
                    width={200}
                />
            </div>
            <p style={style}>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. These symptoms may appear 2-14 days after exposure to the virus:</p>
            <li>Fever or Chills</li>
            <li>Cough</li>
            <li>Shortness of breath</li>
            <li>Fatigue</li>
            <li>Muscle or Body Aches</li>
            <li>Headache</li>
            <li>Loss of taste or smell</li>
            <li>Sore Throat</li>
            <li>Congestion or Runny Nose</li>
            <li>Nausea or Vomiting</li>
            <li>Diarrhea</li>
            <li>Bluish Lips or Face</li>
            <p style={style}>For more information please follow the official WHO articles below:</p>
            <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>WHO Articles</a>
        </div>
    )
}

export default Symptoms
