import react from "react";
import "./WeatherCard.css";

interface WeatherCardProps {
  city: string;
  temp: string;
  currentDate: Date;
  descriptionWeather: string; // общий прогноз
  icon: string;
  pressure: string;
  wind: string;
  feelsLike: string;
  humidity: string; // влажность
}

const WeatherCard = () => {
  const sunny =
    "https://cdn.icon-icons.com/icons2/2211/PNG/512/weather_sun_sunny_cloud_icon_134157.png";

  return (
    <div className={"Card-Container"}>
      <div className={"CityName-Wrapper"}>
        <h3 className={"CityName"}>Москва, РФ</h3>
        <h6 className={"Date"}>Воскресенье, 2 июня</h6>
      </div>
      <div className={"WeatherInfo-Wrapper"}>
        <div className={"InfoIcon-Container"}>
          <img src={sunny} alt="sunny" className={"InfoIcon"} />
          <div className={"InfoTemp-Container"}>
            <h4 className={"InfoTemp"}>
              21<span>&#176;</span>
            </h4>
            <h5 className={"InfoDescription"}>Солнечно</h5>
          </div>
        </div>
        <div className={"FullData-Container"}>
          <div className={"FullData-Row"}>
            <div className={"FullData-Item"}>
              <p>
                23<span>&#176;</span>
              </p>
              <p>Ощущается как</p>
            </div>
            <div className={"FullData-Item"}>
              <p>7 м/c</p>
              <p>Скорость ветра</p>
            </div>
          </div>
          <div className={"FullData-Row"}>
            <div className={"FullData-Item"}>
              <p>65%</p>
              <p>Влажность</p>
            </div>
            <div className={"FullData-Item"}>
              <p>756 па</p>
              <p>Давление</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
