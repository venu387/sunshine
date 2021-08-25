import { CityWeather } from "@sunshine/core/cityWeather";
import { OpenOneCallResponse } from "./openApi/openOneCallResponse";
import { OpenWeather } from "./openApi/openWeatherResponse";

function mapOpenWeatherToSunshineWeather(source: OpenWeather) {
  return new CityWeather({
    cityDetails: {
      country: source.sys?.country!,
      lat: source.coord?.lat!,
      lon: source.coord?.lon!,
      id: source.sys?.id!,
      name: source.name,
      stateCode: "",
      type: source.sys?.type!,
      sunrise: new Date(source.sys?.sunrise!),
      sunset: new Date(source.sys?.sunset!),
    },
    clouds: source.clouds?.all,
    date: new Date(source.dt),
    id: source.id,
    name: source.name,
    rain: { oneHour: source.rain?.["1h"]!, threeHour: source.rain?.["3h"]! },
    snow: { oneHour: source.snow?.["1h"]!, threeHour: source.snow?.["3h"]! },
    wind: {
      deg: source.wind?.deg!,
      gust: source.wind?.gust!,
      speed: source.wind?.speed!,
    },
    timezone: new Date(source.timezone),
    weatherData: {
      feels_like: source.main?.feels_like!,
      grnd_level: source.main?.grnd_level!,
      humidity: source.main?.humidity!,
      pressure: source.main?.pressure!,
      sea_level: source.main?.sea_level!,
      temp: source.main?.temp!,
      temp_max: source.main?.temp_max!,
      temp_min: source.main?.temp_min!,
      state: {
        sunshineIconName: source.weather?.[0].icon!,
        weatherDescription: source.weather?.[0].description!,
        heading: source.weather?.[0].main!,
      },
    },
  });
}

function mapOneCallApiResponseToTwelveHourData(
  source: OpenOneCallResponse,
  destination: CityWeather
) {
  return destination;
}

export {
  mapOpenWeatherToSunshineWeather,
  mapOneCallApiResponseToTwelveHourData,
};
