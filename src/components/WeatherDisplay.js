import React from 'react'

function WeatherDisplay({weather}) {
    const {Temperature, Conditions} = weather;
    const temperatureColor = Temperature > 20 ? "red" : "blue";
    return (
        <div>
            <p style={{color: temperatureColor}}>Temperature: <span>{Temperature}</span></p>  
            <p style={{color: temperatureColor}}>Condition: <span>{Conditions}</span></p>
        </div>
    )
}

export default WeatherDisplay
