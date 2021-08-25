const openApiUrl = new URL(
  "https://api.openweathermap.org/data/2.5/weather?appid=fde8a7986eb63a51eab11d986c11a79d"
);
const oneCallApiUrl = new URL(
  "https://api.openweathermap.org/data/2.5/onecall?appid=fde8a7986eb63a51eab11d986c11a79d"
);

export class OpenApiUrlProvider {
  static GetCurrentWeatherByCityId(cityId: string) {
    const queryParams = { id: cityId };
    return getOpenWeatherApiUrl(queryParams);
  }
  static GetCurrentWeatherByCityNameAndCountry(cityDetails: string) {
    const queryParams = { q: `${cityDetails}` };
    return getOpenWeatherApiUrl(queryParams);
  }
  static GetCurrentWeatherByCoordinates(lat: string, lon: string) {
    const queryParams = { lat: lat, lon: lon };
    return getOpenWeatherApiUrl(queryParams);
  }
  static GetCurrentWeatherByZipCode(zipCode: string, countryCode: string) {
    const queryParams = { zip: `${zipCode},${countryCode}` };
    return getOpenWeatherApiUrl(queryParams);
  }
  /** One Call API */
  static GetForecastWeatherByCoordinates(lat: string, lon: string) {
    const queryParams = { lat: lat, lon: lon };
    return getOneCallApiUrl(queryParams);
  }
}

function getOpenWeatherApiUrl(data: any) {
  var url = new URL(openApiUrl.href);
  for (let d in data) {
    url.searchParams.append(d, data[d]);
  }
  return url.href;
}

function getOneCallApiUrl(data: any) {
  var url = new URL(openApiUrl.href);
  for (let d in data) {
    url.searchParams.append(d, data[d]);
  }
  return url.href;
}
