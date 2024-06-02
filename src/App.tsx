import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

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
