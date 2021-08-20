import { OpenApiUrlProvider } from "../config";
import axios from "axios";
import { Error } from "../types/errors";
import { OpenWeather } from "../types/openWeather";
import { CityInfo, Data, Weather } from "../models/weather";

async function getResponse(url: string): Promise<any> {
  // axios call
  return await axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      var data = response.data as OpenWeather;
      return new Weather({
        cityName: data.name,
        stateCode: "",
        countryCode: data.sys?.country,
        cityId: data.id,
        cityInfo: new CityInfo({
          country: data.sys?.country,
          id: data.sys?.id,
          type: data.sys?.type,
          sunrise: new Date(data.sys?.sunrise!),
          sunset: new Date(data.sys?.sunset!),
        }),
        clouds: data.clouds?.all,
      });
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
  return await getResponse(url);
};

const getWeatherByCityName = async (cityDetails: string) => {
  /**
   * Get weather data for a city name from OpenWeather API
   */
  const url =
    OpenApiUrlProvider.GetCurrentWeatherByCityNameAndCountry(cityDetails);
  return await getResponse(url);
};

export { getWeatherByCityId, getWeatherByCityName };
