import { Serializable } from "../encoding";

export class OpenWeather extends Serializable {
  coord: Coord | undefined;
  weather?: WeatherEntity[] | null;
  base: string = "";
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
