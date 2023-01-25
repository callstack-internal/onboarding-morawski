export interface GeneralInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  deg: number;
  speed: number;
}

export interface Clouds {
  all: number;
}

export interface WeatherData {
  temp: number;
  humidity: number;
  feels_like: number;
  pressure: number;
  temp_min: number;
  temp_max: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface CityWeatherData {
  id: number;
  name: string;
  coord: Coordinates;
  main: WeatherData;
  weather: GeneralInfo[];
  clouds: Clouds;
  wind: Wind;
  timezone?: number;
  visibility: number;
  cod?: number;
  base?: string;
}

export interface GetWeatherResponse {
  list: CityWeatherData[];
  cnt: number;
}
