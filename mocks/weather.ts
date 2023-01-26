import {
  CityWeatherData,
  GetWeatherResponse,
  GeneralInfo,
} from '../src/shared/types';

export const CITY_WEATHER_ITEM: GeneralInfo = {
  id: 804,
  main: 'Clouds',
  description: 'overcast clouds',
  icon: '04n',
};

export const CITY_WEATHER: CityWeatherData = {
  coord: {
    lon: -74.006,
    lat: 40.7143,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n',
    },
  ],
  main: {
    temp: 1.82,
    feels_like: -3.22,
    temp_min: 0.08,
    temp_max: 2.94,
    pressure: 1023,
    humidity: 62,
  },
  visibility: 10000,
  wind: {
    speed: 6.17,
    deg: 50,
  },
  clouds: {
    all: 100,
  },
  id: 5128581,
  name: 'New York',
};

export const WEATHER_RESPONSE: GetWeatherResponse = {
  cnt: 2,
  list: [
    {
      coord: {
        lon: -118.2437,
        lat: 34.0522,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      main: {
        temp: 9.02,
        feels_like: 8.49,
        temp_min: 6.78,
        temp_max: 11.36,
        pressure: 1024,
        humidity: 90,
      },
      visibility: 10000,
      wind: {
        speed: 1.54,
        deg: 10,
      },
      clouds: {
        all: 0,
      },
      id: 5368361,
      name: 'Los Angeles',
    },
    CITY_WEATHER,
  ],
};
