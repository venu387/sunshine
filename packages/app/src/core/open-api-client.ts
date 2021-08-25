import {AxiosSender} from '@sunshine/core/sender';
import {CityWeather} from '@sunshine/core/city-weather';
import * as Config from './config';

export class ApiClient {
  constructor(private sender: AxiosSender) {
    sender = new AxiosSender();
  }

  async getCityWeather(cityName: string, cityCountry: string) {
    const url = new URL(
      `/getByCityName/${cityName},${cityCountry}`,
      Config.sunshineApiUrl,
    ).href;
    const data = await this.sender.get<CityWeather>(url);
    console.log(data);
  }

  async getCityWeatherByCityId(cityId: number) {
    const url = new URL(`/getByCityId/${cityId}`, Config.sunshineApiUrl).href;
    const data = await this.sender.get<CityWeather>(url);
    console.log(data);
  }

  async getGet12HourForecast(cityId: number) {
    const url = new URL(`/oneCall/${cityId}`, Config.sunshineApiUrl).href;
    const data = await this.sender.get<CityWeather>(url);
    console.log(data);
  }
}
