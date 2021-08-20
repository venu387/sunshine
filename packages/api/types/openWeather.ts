import { Serializable } from "./encoding";

export class OpenWeather extends Serializable {
  constructor(props: Partial<OpenWeather>) {
    super();
    Object.assign(this, props);
  }
  coord: Coord | undefined;
  weather?: WeatherEntity[] | null;
  base: string = "";
  main: Main | undefined;
  wind: Wind | undefined;
  clouds: Clouds | undefined;
  dt: number = 0;
  sys: Sys | undefined;
  id: number = 0;
  name: string = "";
  cod: number = 0;
}
class Coord {
  constructor(props: Partial<Coord>) {
    Object.assign(this, props);
  }
  lon: number = 0;
  lat: number = 0;
}
class WeatherEntity {
  constructor(props: Partial<WeatherEntity>) {
    Object.assign(this, props);
  }
  id: number = 0;
  main: string = "";
  description: string = "";
  icon: string = "";
}
class Main {
  constructor(props: Partial<Main>) {
    Object.assign(this, props);
  }
  temp: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
}
class Wind {
  constructor(props: Partial<Wind>) {
    Object.assign(this, props);
  }
  speed: number = 0;
  deg: number = 0;
}
class Clouds {
  constructor(props: Partial<Clouds>) {
    Object.assign(this, props);
  }
  all: number = 0;
}
class Sys {
  constructor(props: Partial<Sys>) {
    Object.assign(this, props);
  }
  type: number = 0;
  id: number = 0;
  message: number = 0;
  country: string = "";
  sunrise: number = 0;
  sunset: number = 0;
}
