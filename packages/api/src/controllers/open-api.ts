import { OpenApiUrlProvider } from "../config";
import axios from "axios";
import { Error } from "@sunshine/core/errors";
import { OpenWeather } from "../types/openApi/open-weather-response";
import * as Mapper from "../types/mapper";
import { OpenOneCallResponse } from "../types/openApi/open-one-call-response";

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
  const data = await getResponse(url);
  return data as OpenOneCallResponse;
};

export { getCityWeatherForecast };
