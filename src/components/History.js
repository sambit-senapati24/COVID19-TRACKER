import React from 'react'

function History() {
    let inlineStyle = {
        fontSize: '40px',
        color: '#1b1b1b'
    };
    let pStyle = {
        textAlign: 'left'
    }
    return (
        <>
            <div className='history'>
                <h1 style={inlineStyle} >Brief CoronaVirus History : </h1>
                <hr />
            </div>
            <p style={pStyle}>Coronaviruses are a big family of different viruses. Some of them cause the common cold in people. Others infect animals, including bats, camels, and cattle.
            But how did SARS-CoV-2, the new coronavirus that causes COVID-19, come into being?
            </p>
            <h1 style={inlineStyle}>Where Did the Coronavirus Come From?</h1>
            <p style={pStyle}>Experts say SARS-CoV-2 originated in bats. That’s also how the coronaviruses behind Middle East respiratory syndrome (MERS) and severe acute respiratory syndrome (SARS) got started.</p>
            <p style={pStyle}>SARS-CoV-2 made the jump to humans at one of Wuhan’s open-air “wet markets.” They’re where customers buy fresh meat and fish, including animals that are killed on the spot.</p>
            <p style={pStyle}>Some wet markets sell wild or banned species like cobras, wild boars, and raccoon dogs. Crowded conditions can let viruses from different animals swap genes. Sometimes the virus changes so much it can start to infect and spread among people.</p>
            <p style={pStyle}>Still, the Wuhan market didn’t sell bats at the time of the outbreak. That’s why early suspicion also fell on pangolins, also called scaly anteaters, which are sold illegally in some markets in China. Some coronaviruses that infect pangolins are similar to SARS-CoV-2.</p>
            <h1 style={inlineStyle}>Coronavirus Evolution :</h1>
            <p style={pStyle}>Scientists first identified a human coronavirus in 1965. It caused a common cold. Later that decade, researchers found a group of similar human and animal viruses and named them after their crown-like appearance.</p>
            <p style={pStyle}>Seven coronaviruses can infect humans. The one that causes SARS emerged in southern China in 2002 and quickly spread to 28 other countries. More than 8,000 people were infected by July 2003, and 774 died. A small outbreak in 2004 involved only four more cases. This coronavirus causes fever, headache, and respiratory problems such as cough and shortness of breath.</p>

        </>
    )
}

export default History
