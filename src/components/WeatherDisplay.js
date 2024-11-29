import React from 'react'

function WeatherDisplay({weather}) {
    const {temperature, condition} = weather;
    const temperatureColor = temperature > 20 ? "red" : "blue";
    return (
        <div>
            <p style={{color: temperatureColor}}>Temperature: {temperature}°C</p>  
            <span style={{color: temperatureColor}}>Condition: {condition}</span>
        </div>
    )
}

export default WeatherDisplay
