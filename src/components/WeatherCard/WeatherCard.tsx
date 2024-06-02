import React, { useState, useEffect } from "react";
import "./WeatherCard.css";
import { getWeatherFromApi } from "../../api/getWeatherData";
import { WeatherModel } from "../../model/Weather";
import { getTodaysDate } from "../../helpers/helper";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState<WeatherModel | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWeatherFromApi();
        setWeatherData(data);
      } catch (error) {
        console.log("Данные о погоде не пришли :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="Card-Container">
      {/*проверка что переменная с погодой не пустая */}
      {weatherData && (
        <>
          <div className="CityName-Wrapper">
            <h3 className="CityName">{weatherData.name}</h3>
            <h6 className="Date">{getTodaysDate()}</h6>
          </div>
          <div className="WeatherInfo-Wrapper">
            <div className="InfoIcon-Container">
              <div className="InfoTemp-Container">
                <div className="Temp-Wrapper">
                  <h4 className="InfoTemp">
                    {Math.round(Number(weatherData.main.temp))}
                    <span>&#176;</span>
                  </h4>
                  <img
                    src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                    alt={""}
                    className="InfoIcon"
                  />
                </div>

                <h5 className="InfoDescription">
                  {weatherData.weather[0].description}
                </h5>
              </div>
            </div>
            <div className="FullData-Container">
              <div className="FullData-Row">
                <div className="FullData-Item">
                  <p>
                    {Math.round(Number(weatherData.main.feels_like))}
                    <span>&#176;</span>
                  </p>
                  <p>Ощущается как</p>
                </div>
                <div className="FullData-Item">
                  <p>{weatherData.wind.speed} м/с</p>
                  <p>Скорость ветра</p>
                </div>
              </div>
              <div className="FullData-Row">
                <div className="FullData-Item">
                  <p>{weatherData.main.humidity}%</p>
                  <p>Влажность</p>
                </div>
                <div className="FullData-Item">
                  <p>{weatherData.main.pressure} мм</p>
                  <p>Давление</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
