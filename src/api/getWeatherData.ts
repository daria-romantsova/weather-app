const REACT_APP_WEATHER_API_TOKEN = "860712f1b915af9a794b207d3b3215de";
//  8ee55131140631ad491ccf44d60dcdf7 - первый мой ключ

async function getWeatherFromApi() {
  try {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.set("q", "moscow");
    url.searchParams.set("units", "metric");
    url.searchParams.set("appid", REACT_APP_WEATHER_API_TOKEN);

    const response = await fetch(url.toString(), {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Ошибка получения данных о погоде");
    }
  } catch (error) {
    console.error("Ошибка получения данных о погоде", error);
    return null;
  }
}
export default getWeatherFromApi;
