import "./WeatherWeekInfo.css";
import React, { useEffect, useState } from "react";
import { WeekWeather } from "../../model/Weather";
import { getWeekWeatherFromApi } from "../../api/getWeatherData";
import { dayHelper } from "../../helpers/helper";

const WeatherWeekInfo = () => {
  const [weekData, setWeekData] = useState<WeekWeather | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWeekWeatherFromApi();
        setWeekData(data);
      } catch (error) {
        console.log("Данные о погоде на неделю не пришли :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={"WeatherWeekInfo"}>
      <h4 className={"WeatherWeekInfo-Text"}>Погода на ближайшие дни</h4>
      <div className={"WeatherWeekWrapper"}>
        {weekData &&
            weekData.list.map((dayWeather, index) => {
              return (
                  <div className={"WeatherWeekItem"} key={index}>
                    <img
                        src={`http://openweathermap.org/img/w/${dayWeather.weather[0].icon}.png`}
                        alt={dayWeather.weather[0].description}
                        className={"WeatherWeekIcon"}
                    />
                    <p className={"WeatherWeekTemp"}>
                      {Math.round(Number(dayWeather.main.temp))}
                      <span>&#176;</span>
                    </p>
                    <p className={"WeatherWeekDate"}>{dayHelper(Number(dayWeather.dt) * 1000, index)}</p>
                  </div>
              );
            })}
      </div>
    </div>
  );
};

export default WeatherWeekInfo;
