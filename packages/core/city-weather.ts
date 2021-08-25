export class CityWeather {
  constructor(props: Partial<CityWeather>) {
    Object.assign(this, props);
  }
  id: number = 0;
  cityDetails?: CityDetails;
  weatherData?: WeatherData;
  wind?: Wind;
  rain?: Rain;
  snow?: Snow;
  clouds: number = 0;
  date?: Date;
  timezone?: Date;
  name: string = "";
  twelveHourData: TwelveHourData | undefined;
  sevenDayData: SevenDayData | undefined;
  alerts?: CityAlerts[] | undefined;
}

export class CityAlerts {
  constructor(props: Partial<CityAlerts>) {
    Object.assign(this, props);
  }
  sender_name: string = "";
  event: string = "";
  start: number = 0;
  end: number = 0;
  description: string = "";
  tags?: string[] | undefined;
}

export class TwelveHourData {
  constructor(props: Partial<TwelveHourData>) {
    Object.assign(this, props);
  }
  hours: HourData[] | undefined;
}

export class HourData {
  constructor(props: Partial<HourData>) {
    Object.assign(this, props);
  }
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
  rain: number = 0;
  snow: number = 0;
  iconInfo?: IconAndDescription | undefined;
}

export class SevenDayData {
  constructor(props: Partial<SevenDayData>) {
    Object.assign(this, props);
  }
  days: DayData[] | undefined;
}

export class DayData {
  constructor(props: Partial<DayData>) {
    Object.assign(this, props);
  }
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
  iconInfo?: IconAndDescription | undefined;
  clouds: number = 0;
  pop: number = 0;
  uvi: number = 0;
  rain?: number = 0;
  snow?: number = 0;
}

export class Temp {
  day: number = 0;
  min: number = 0;
  max: number = 0;
  night: number = 0;
  eve: number = 0;
  morn: number = 0;
}

export class FeelsLike {
  day: number = 0;
  night: number = 0;
  eve: number = 0;
  morn: number = 0;
}

export class CityDetails {
  constructor(props: Partial<CityDetails>) {
    Object.assign(this, props);
  }
  id: number = 0;
  name: string = "";
  stateCode: string = "";
  lon: number = 0;
  lat: number = 0;
  type: number = 0;
  country: string = "";
  sunrise?: Date;
  sunset?: Date;
}

export class WeatherData {
  constructor(props: Partial<WeatherData>) {
    Object.assign(this, props);
  }
  temp: number = 0;
  feels_like: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  sea_level: number = 0;
  grnd_level: number = 0;
  state?: IconAndDescription;
}

export class IconAndDescription {
  constructor(props: Partial<IconAndDescription>) {
    Object.assign(this, props);
  }
  heading: string = "";
  weatherDescription: string = "";
  sunshineIconName: string = "";
}

export class Wind {
  constructor(props: Partial<Wind>) {
    Object.assign(this, props);
  }
  speed: number = 0;
  deg: number = 0;
  gust: number = 0;
}

export class Rain {
  constructor(props: Partial<Rain>) {
    Object.assign(this, props);
  }
  oneHour: number = 0;
  threeHour: number = 0;
}

export class Snow {
  constructor(props: Partial<Snow>) {
    Object.assign(this, props);
  }
  oneHour: number = 0;
  threeHour: number = 0;
}
