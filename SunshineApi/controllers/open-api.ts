import { OpenApiUrlProvider } from "../config";
import axios from "axios";

const getWeather = (cityId: string) => {
  /**
   * Get weather data for a city ID from Open API
   */
  const url = OpenApiUrlProvider.GetCurrentWeatherByCityId(cityId);

  // axios call
  axios
    .get(url)
    .then(function (response: any) {
      // handle success
      console.log(response);
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export { getWeather };
