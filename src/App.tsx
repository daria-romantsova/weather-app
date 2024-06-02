import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherWeekInfo from "./components/WeatherWeekInfo/WeatherWeekInfo";

function App() {
  return (
    <div className="App">
      <div className={"Weather-Container"}>
        <WeatherCard />
        <WeatherWeekInfo />
      </div>
    </div>
  );
}

export default App;
