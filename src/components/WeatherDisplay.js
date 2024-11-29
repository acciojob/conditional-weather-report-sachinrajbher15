import React from 'react'

function WeatherDisplay({weather}) {
    const {temperature, condition} = weather;
    const temperatureColor = temperature > 20 ? "red" : "blue";
    return (
        <div>
            <p style={{color: temperatureColor}}>Temperature: {temperature}</p>  
            <span style={{color: temperatureColor}}>Conditions: {condition}</span>
        </div>
    )
}

export default WeatherDisplay
