import { OpenApiUrlProvider } from "../config";
import axios from "axios";
import { Error } from "../types/errors";
import { OpenWeather } from "../types/openWeather";
import { CityWeather } from "@sunshine/core/cityWeather";

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
  return new CityWeather({
    cityDetails: {
      country: data.sys?.country!,
      lat: data.coord?.lat!,
      lon: data.coord?.lon!,
      id: data.sys?.id!,
      name: data.name,
      stateCode: "",
      type: data.sys?.type!,
      sunrise: new Date(data.sys?.sunrise!),
      sunset: new Date(data.sys?.sunset!),
    },
  });
};

const getWeatherByCityName = async (cityDetails: string) => {
  /**
   * Get weather data for a city name from OpenWeather API
   */
  const url =
    OpenApiUrlProvider.GetCurrentWeatherByCityNameAndCountry(cityDetails);
  return (await getResponse(url)) as OpenWeather;
};

const getAllByLonLat = async (lon: string, lat: string) => {
  /**
   * Get 48-hour and 7 day weather data for lat and lon from OpenWeather API
   */
  const url = OpenApiUrlProvider.GetForecastWeatherByCoordinates(lon, lat);
  return await getResponse(url);
};

export { getWeatherByCityId, getWeatherByCityName, getAllByLonLat };
