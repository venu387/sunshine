//** Current weather */

class OpenWeather {
  coord: Coord | undefined;
  weather?: WeatherEntity[] | null;
  base: string = "";
  visibility: number = 0;
  main: Main | undefined;
  wind: Wind | undefined;
  clouds: Clouds | undefined;
  rain: RainOrSnow | undefined;
  snow: RainOrSnow | undefined;
  dt: number = 0;
  sys: Sys | undefined;
  timezone: number = 0;
  id: number = 0;
  name: string = "";
  cod: number = 0;
  error: Error | undefined;
}

class Coord {
  lon: number = 0;
  lat: number = 0;
}

class WeatherEntity {
  id: number = 0;
  main: string = "";
  description: string = "";
  icon: string = "";
}

class Main {
  temp: number = 0;
  feels_like: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  sea_level: number = 0;
  grnd_level: number = 0;
}

class Wind {
  speed: number = 0;
  deg: number = 0;
  gust: number = 0;
}

class Clouds {
  all: number = 0;
}

class RainOrSnow {
  "1h": number = 0;
  "3h": number = 0;
}

class Sys {
  type: number = 0;
  id: number = 0;
  message: number = 0;
  country: string = "";
  sunrise: number = 0;
  sunset: number = 0;
}

//** One Call */

class OpenOneCallResponse {
  lat: number = 0;
  lon: number = 0;
  timezone: string = "";
  timezone_offset: number = 0;
  hourly?: Hourly[] | null;
  daily?: Daily[] | null;
  alerts?: Alerts[] | null;
}

class Hourly {
  dt: number = 0;
  temp: number = 0;
  feels_like: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  dew_point: number = 0;
  uvi: number = 0;
  clouds: number = 0;
  visibility: number = 0;
  wind_speed: number = 0;
  wind_deg: number = 0;
  wind_gust: number = 0;
  pop: number = 0;
  rain: RainOrSnow | undefined;
  snow: RainOrSnow | undefined;
  weather?: Weather[] | null;
}

class Weather {
  id: number = 0;
  main: string = "";
  description: string = "";
  icon: string = "";
}

class Daily {
  dt: number = 0;
  sunrise: number = 0;
  sunset: number = 0;
  moonrise: number = 0;
  moonset: number = 0;
  moon_phase: number = 0;
  temp: Temp | undefined;
  feels_like: FeelsLike | undefined;
  pressure: number = 0;
  humidity: number = 0;
  dew_point: number = 0;
  wind_speed: number = 0;
  wind_deg: number = 0;
  wind_gust: number = 0;
  weather?: Weather[] | null;
  clouds: number = 0;
  pop: number = 0;
  uvi: number = 0;
  rain?: number = 0;
  snow?: number = 0;
}

class Temp {
  day: number = 0;
  min: number = 0;
  max: number = 0;
  night: number = 0;
  eve: number = 0;
  morn: number = 0;
}

class FeelsLike {
  day: number = 0;
  night: number = 0;
  eve: number = 0;
  morn: number = 0;
}

class Alerts {
  sender_name: string = "";
  event: string = "";
  start: number = 0;
  end: number = 0;
  description: string = "";
  tags?: string[] | undefined;
}

export { OpenWeather, OpenOneCallResponse };
