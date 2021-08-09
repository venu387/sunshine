const openApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=fde8a7986eb63a51eab11d986c11a79d&";

export class OpenApiUrlProvider {
  static GetCurrentWeatherByCityId(cityId: string) {
    const queryParams = { id: cityId };
    return new URL(encodeQueryData(queryParams), openApiUrl).href;
  }
  static GetCurrentWeatherByCityName(cityName: string) {
    const queryParams = { q: cityName };
    return new URL(encodeQueryData(queryParams), openApiUrl).href;
  }
  static GetCurrentWeatherByCityNameAndCountry(
    cityName: string,
    stateCode: string,
    countryCode: string
  ) {
    const queryParams = { q: `${cityName},${stateCode},${countryCode}` };
    return new URL(encodeQueryData(queryParams), openApiUrl).href;
  }
  static GetCurrentWeatherByCoordinates(lat: string, lon: string) {
    const queryParams = { lat: lat, lon: lon };
    return new URL(encodeQueryData(queryParams), openApiUrl).href;
  }
  static GetCurrentWeatherByZipCode(zipCode: string, countryCode: string) {
    const queryParams = { zip: `${zipCode},${countryCode}` };
    return new URL(encodeQueryData(queryParams), openApiUrl).href;
  }
}

function encodeQueryData(data: any) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return ret.join("&");
}
