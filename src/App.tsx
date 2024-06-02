import React from "react";
import "./App.css";
import getWeatherFromApi from "./api/getWeatherData";
import WeatherCard from "./components/WeatherCard/WeatherCard";

getWeatherFromApi();

function App() {
  return (
    <div className="App">
      <div className={"Weather-Container"}>
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
