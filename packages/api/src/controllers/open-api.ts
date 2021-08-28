import { OpenApiUrlProvider } from "../config";
import { AxiosSender } from "@sunshine/core/sender";
import { OpenWeather } from "@sunshine/core/types/external/open-weather-response";
import * as Mapper from "@sunshine/core/mapper";
import { OpenOneCallResponse } from "@sunshine/core/types/external/open-one-call-response";

const sender = new AxiosSender();

const getWeatherByCityId = async (cityId: string) => {
  /**
   * Get weather data for a city ID from OpenWeather API
   */
  const url = OpenApiUrlProvider.GetCurrentWeatherByCityId(cityId);

  var data = await sender.get<OpenWeather>(url);
  return Mapper.mapOpenWeatherToSunshineWeather(data);
};

const getWeatherByCityName = async (cityDetails: string) => {
  /**
   * Get weather data for a city name from OpenWeather API
   */
  const url =
    OpenApiUrlProvider.GetCurrentWeatherByCityNameAndCountry(cityDetails);
  var data = await sender.get<OpenWeather>(url);
  return Mapper.mapOpenWeatherToSunshineWeather(data);
};

const getCityWeatherForecast = async (cityDetails: string) => {
  var cityCurrentWeather = await getWeatherByCityName(cityDetails);
  if (
    cityCurrentWeather?.id &&
    cityCurrentWeather?.cityDetails?.lat &&
    cityCurrentWeather?.cityDetails?.lon
  ) {
    const oneCallResponse = await getAllByLonLat(
      cityCurrentWeather?.cityDetails?.lat.toString(),
      cityCurrentWeather?.cityDetails?.lon.toString()
    );
    cityCurrentWeather = Mapper.mapOneCallApiResponseToFutureForecastData(
      oneCallResponse,
      cityCurrentWeather
    );
    return cityCurrentWeather;
  }
};

const getAllByLonLat = async (lat: string, lon: string) => {
  /**
   * Get 48-hour and 7 day weather data for lat and lon from OpenWeather API
   */
  const url = OpenApiUrlProvider.GetForecastWeatherByCoordinates(lat, lon);
  const data = await sender.get<OpenOneCallResponse>(url);
  return data;
};

export { getCityWeatherForecast };
