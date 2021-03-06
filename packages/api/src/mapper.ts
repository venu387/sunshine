import {
  CityWeather,
  DayData,
  HourData,
  IconAndDescription,
} from "@sunshine/core/types/city-weather";
import { OpenWeather, OpenOneCallResponse } from "./models/open-api";

function mapOpenWeatherToSunshineWeather(source: OpenWeather) {
  return new CityWeather({
    cityDetails: {
      country: source.sys?.country!,
      lat: source.coord?.lat!,
      lon: source.coord?.lon!,
      id: source.id,
      name: source.name,
      stateCode: "",
      type: source.sys?.type!,
      sunrise: new Date(source.sys?.sunrise! * 1000), // unix -> date
      sunset: new Date(source.sys?.sunset! * 1000),
    },
    clouds: source.clouds?.all,
    date: new Date(source.dt * 1000),
    id: source.id,
    name: source.name,
    rain: { oneHour: source.rain?.["1h"]!, threeHour: source.rain?.["3h"]! },
    snow: { oneHour: source.snow?.["1h"]!, threeHour: source.snow?.["3h"]! },
    wind: {
      deg: source.wind?.deg!,
      gust: source.wind?.gust!,
      speed: source.wind?.speed!,
    },
    timezone: new Date(source.timezone * 1000),
    weatherData: {
      feels_like: source.main?.feels_like!,
      grnd_level: source.main?.grnd_level!,
      humidity: source.main?.humidity!,
      pressure: source.main?.pressure!,
      sea_level: source.main?.sea_level!,
      temp: source.main?.temp!,
      temp_max: source.main?.temp_max!,
      temp_min: source.main?.temp_min!,
      visibility: source.visibility! / 1000, // m -> km
      state: {
        sunshineIconName: source.weather?.[0].icon!,
        weatherDescription: source.weather?.[0].description!,
        heading: source.weather?.[0].main!,
      },
    },
  });
}

function mapOneCallApiResponseToFutureForecastData(
  source: OpenOneCallResponse,
  destination: CityWeather
) {
  return new CityWeather({
    ...destination,
    twelveHourData: {
      hours: source.hourly?.slice(0, 12).map((h) => {
        return new HourData({
          ...h,
          date: new Date(h.dt * 1000),
          rain: h.rain?.["1h"],
          snow: h.snow?.["1h"],
          iconInfo: new IconAndDescription({
            weatherDescription: h.weather?.[0].description,
            heading: h.weather?.[0].main,
            sunshineIconName: h.weather?.[0].icon,
          }),
        });
      }),
    },
    sevenDayData: {
      days: source.daily?.slice(1, 8).map((d) => {
        return new DayData({
          ...d,
          sunrise: new Date(d.sunrise * 1000),
          sunset: new Date(d.sunset * 1000),
          moonrise: new Date(d.moonrise * 1000),
          moonset: new Date(d.moonset * 1000),
          date: new Date(d.dt * 1000),
          iconInfo: new IconAndDescription({
            weatherDescription: d.weather?.[0].description,
            heading: d.weather?.[0].main,
            sunshineIconName: d.weather?.[0].icon,
          }),
        });
      }),
    },
    alerts: source.alerts?.map((a) => {
      return { ...a };
    }),
  });
}

export {
  mapOpenWeatherToSunshineWeather,
  mapOneCallApiResponseToFutureForecastData,
};
