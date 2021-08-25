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
  twelveHour: TwelveHourData | undefined;
  sevenDay: SevenDayData | undefined;
}

class TwelveHourData {
  constructor(props: Partial<TwelveHourData>) {
    Object.assign(this, props);
  }
  hours: HourData[] | undefined;
}

class HourData {
  constructor(props: Partial<HourData>) {
    Object.assign(this, props);
  }
}

class SevenDayData {
  constructor(props: Partial<SevenDayData>) {
    Object.assign(this, props);
  }
  days: DayData[] | undefined;
}

class DayData {
  constructor(props: Partial<DayData>) {
    Object.assign(this, props);
  }
}

class CityDetails {
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

class WeatherData {
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

class IconAndDescription {
  constructor(props: Partial<IconAndDescription>) {
    Object.assign(this, props);
  }
  heading: string = "";
  weatherDescription: string = "";
  sunshineIconName: string = "";
}

class Wind {
  constructor(props: Partial<Wind>) {
    Object.assign(this, props);
  }
  speed: number = 0;
  deg: number = 0;
  gust: number = 0;
}

class Rain {
  constructor(props: Partial<Rain>) {
    Object.assign(this, props);
  }
  oneHour: number = 0;
  threeHour: number = 0;
}

class Snow {
  constructor(props: Partial<Snow>) {
    Object.assign(this, props);
  }
  oneHour: number = 0;
  threeHour: number = 0;
}
