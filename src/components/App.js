
import React, {useState} from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

const App = () => {

  const [weatherData, setWeatherData] = useState({temperature: 25, condition:"Sunny"});
  
  const handleTempChange = (event) =>{
    const newTemp = event.target.value;
    setWeatherData((prevTemp) => ({
      ...prevTemp,
      temperature: newTemp,
    }));
  };
  const handleCondChange = (event) =>{
    const newCond = event.target.value;
    setWeatherData((prevCond) => ({
      ...prevCond,
      condition: newCond,
    }));
  };

  return (
    <div className="container">
      <div className="input-container">
        <label className="labels-style">Enter Temperature: 
          <input type="number" onChange={handleTempChange} value={weatherData.temperature}></input>
        </label>
        <label className="labels-style">Enter Condition: 
          <input type="text" onChange={handleCondChange} value={weatherData.condition}></input>
        </label>
      </div>
      <div className="output-container">
        <WeatherDisplay  weather={weatherData}/>
      </div>
    </div>
  )
}

export default App
