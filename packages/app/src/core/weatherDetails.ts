export class CityWeather {
  constructor(props: Partial<CityWeather>) {
    Object.assign(this, props);
  }
  id: number = 0;
  cityDetails?: CityDetails;
  weatherData?: WeatherData;
  main?: Main;
  visibility: number = 0;
  wind?: Wind;
  rain?: Rain;
  snow?: Snow;
  clouds: number = 0;
  date?: Date;
  timezone: number = 0;
  cityId: number = 0;
  name: string = '';
}

export class CityDetails {
  constructor(props: Partial<CityDetails>) {
    Object.assign(this, props);
  }
  id: number = 0;
  cityName: string = '';
  stateCode: string = '';
  countryCode: string = '';
  lon: string = '';
  lat: string = '';
  type: number = 0;
  country: string = '';
  sunrise?: Date;
  sunset?: Date;
}

export class WeatherData {
  constructor(props: Partial<WeatherData>) {
    Object.assign(this, props);
  }
  main: string = '';
  description: string = '';
  iconName: string = '';
  temp: number = 0;
  feelsLike: number = 0;
  tempMin: number = 0;
  tempMax: number = 0;
  pressure: number = 0;
  humidity: number = 0;
}

export class Main {
  constructor(props: Partial<Main>) {
    Object.assign(this, props);
  }
  temp: number = 0;
  feelsLike: number = 0;
  tempMin: number = 0;
  tempMax: number = 0;
  pressure: number = 0;
  humidity: number = 0;
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
