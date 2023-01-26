import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {RootRoute} from '../../navigation/Routes';
import WeatherItem from './WeatherListItem';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('WeatherItem component', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it('should navigate to WeatherDetails when item is clicked', () => {
    const mockItem = {
      id: 1,
      name: 'Test City',
      coord: {lon: 1, lat: 1},
      main: {
        temp: 20,
        humidity: 50,
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
      clouds: {all: 0},
      wind: {deg: 200, speed: 5},
      timezone: 3600,
      visibility: 10000,
      cod: 200,
      base: 'stations',
    };

    const {getByTestId} = render(<WeatherItem item={mockItem} />);

    const touchableOpacity = getByTestId('weather-item-touchable');
    fireEvent.press(touchableOpacity);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith(RootRoute.WeatherDetails, {
      item: mockItem,
    });
  });
});
