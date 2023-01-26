import React from 'react';
import {render, screen} from '@testing-library/react-native';
import WeatherGeneralInfo from './WeatherGeneralInfo';
import {CityWeatherData} from '../../shared/types';

describe('WeatherGeneralInfo', () => {
  const item: CityWeatherData = {
    id: 524901,
    name: 'New York',
    coord: {
      lon: -73.99,
      lat: 40.73,
    },
    main: {
      temp: 20,
      humidity: 60,
      feels_like: 18,
      pressure: 1013,
      temp_min: 18,
      temp_max: 22,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    clouds: {
      all: 5,
    },
    wind: {
      deg: 270,
      speed: 2,
    },
    visibility: 10000,
    timezone: -14400,
  };

  it('should render the correct name, description and temperature', () => {
    render(<WeatherGeneralInfo item={item} showIcon={false} />);
    expect(screen.getByText('New York')).toBeDefined();
    expect(screen.getByText('Clear Sky')).toBeDefined();
    expect(screen.getByText('20°C')).toBeDefined();
  });
});
