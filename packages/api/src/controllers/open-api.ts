import { OpenApiUrlProvider } from "../config";
import axios from "axios";
import { Error } from "../types/errors";
import { OpenWeather } from "../types/openApi/open-weather-response";
import * as Mapper from "../types/mapper";

async function getResponse(url: string): Promise<any> {
  // axios call
  return await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return new Error({ message: error.message });
    });
}

const getWeatherByCityId = async (cityId: string) => {
  /**
   * Get weather data for a city ID from OpenWeather API
   */
  const url = OpenApiUrlProvider.GetCurrentWeatherByCityId(cityId);

  var data = (await getResponse(url)) as OpenWeather;
  return Mapper.mapOpenWeatherToSunshineWeather(data);
};

const getWeatherByCityName = async (cityDetails: string) => {
  /**
   * Get weather data for a city name from OpenWeather API
   */
  const url =
    OpenApiUrlProvider.GetCurrentWeatherByCityNameAndCountry(cityDetails);
  var data = (await getResponse(url)) as OpenWeather;
  return Mapper.mapOpenWeatherToSunshineWeather(data);
};

const get12HourForecast = async (cityId: string) => {
  var cityCurrentWeather = await getWeatherByCityId(cityId);
  if (
    cityCurrentWeather?.id &&
    cityCurrentWeather?.cityDetails?.lat &&
    cityCurrentWeather?.cityDetails?.lon
  ) {
    const oneCallResponse = await getAllByLonLat(
      cityCurrentWeather?.cityDetails?.lon.toString(),
      cityCurrentWeather?.cityDetails?.lat.toString()
    );
    cityCurrentWeather = Mapper.mapOneCallApiResponseToTwelveHourData(
      oneCallResponse,
      cityCurrentWeather
    );
    return cityCurrentWeather;
  }
};

const get7DayForecast = async (cityId: string) => {
  var cityCurrentWeather = await getWeatherByCityId(cityId);
  if (
    cityCurrentWeather?.id &&
    cityCurrentWeather?.cityDetails?.lat &&
    cityCurrentWeather?.cityDetails?.lon
  ) {
    const oneCallResponse = await getAllByLonLat(
      cityCurrentWeather?.cityDetails?.lon.toString(),
      cityCurrentWeather?.cityDetails?.lat.toString()
    );
    cityCurrentWeather = Mapper.mapOneCallApiResponseToSevenDayData(
      oneCallResponse,
      cityCurrentWeather
    );
    return cityCurrentWeather;
  }
};

const getAllByLonLat = async (lon: string, lat: string) => {
  /**
   * Get 48-hour and 7 day weather data for lat and lon from OpenWeather API
   */
  const url = OpenApiUrlProvider.GetForecastWeatherByCoordinates(lon, lat);
  return await getResponse(url);
};

export {
  getWeatherByCityId,
  getWeatherByCityName,
  get12HourForecast,
  get7DayForecast,
};
