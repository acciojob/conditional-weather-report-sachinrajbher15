import React from 'react'

function WeatherDisplay({weather}) {
    const {temperature, conditions} = weather;
    const temperatureColor = temperature > 20 ? "red" : "blue";
    return (
        <div>
            <p style={{color: temperatureColor}}>Temperature: {temperature}</p>  
            <p style={{color: temperatureColor}}>Conditions: {conditions}</p>
        </div>
    )
}

export default WeatherDisplay
