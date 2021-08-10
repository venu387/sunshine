import { OpenApiUrlProvider } from "../config";
import axios from "axios";

const getResponse = (url: string) => {
  // axios call
  axios
    .get(url)
    .then(function (response: any) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

const getWeatherByCityId = (cityId: string) => {
  /**
   * Get weather data for a city ID from OpenWeather API
   */
  const url = OpenApiUrlProvider.GetCurrentWeatherByCityId(cityId);
  return getResponse(url);
};

const getWeatherByCityName = (cityDetails: string) => {
  /**
   * Get weather data for a city name from OpenWeather API
   */
  const url =
    OpenApiUrlProvider.GetCurrentWeatherByCityNameAndCountry(cityDetails);
  return getResponse(url);
};

export { getWeatherByCityId, getWeatherByCityName };
