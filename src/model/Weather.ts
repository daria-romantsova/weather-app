export interface WeatherModel {
  readonly dt: string;
  readonly name: string;
  readonly main: Main;
  readonly currentDate: Date;
  readonly weather: Weather[];
  readonly wind: Wind;
}

export interface Main {
  readonly pressure: string;
  readonly feels_like: string;
  readonly temp: string;
  readonly humidity: string;
}

export interface Weather {
  readonly icon: string;
  readonly description: string;
}

export interface Wind {
  readonly speed: string;
}

export interface WeekWeather {
  readonly list: WeatherModel[];
}
