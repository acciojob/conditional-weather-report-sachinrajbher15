
import React, {useState} from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

const App = () => {

  const [weatherData, setWeatherData] = useState({Temperature: 25, Conditions:"Sunny"});
  
  const handleTempChange = (event) =>{
    const newTemp = event.target.value;
    setWeatherData((prevTemp) => ({
      ...prevTemp,
      Temperature: newTemp,
    }));
  };
  const handleCondChange = (event) =>{
    const newCond = event.target.value;
    setWeatherData((prevCond) => ({
      ...prevCond,
      Conditions: newCond,
    }));
  };

  return (
    <div className="container">
      <div className="input-container">
        <label className="labels-style">Enter Temperature: 
          <input type="number" onChange={handleTempChange} value={weatherData.Temperature}></input>
        </label>
        <label className="labels-style">Enter Conditions: 
          <input type="text" onChange={handleCondChange} value={weatherData.Conditions}></input>
        </label>
      </div>
      <div className="output-container">
        <WeatherDisplay  weather={weatherData}/>
      </div>
    </div>
  )
}

export default App
