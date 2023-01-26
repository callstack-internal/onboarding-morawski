import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {RootRoute} from '../../navigation/Routes';
import WeatherList from './WeatherList';
import {WEATHER_RESPONSE} from '../../../mocks/weather';

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

describe('WeatherList', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it('displays loading text when loading', () => {
    render(<WeatherList cities={[]} error={null} isLoading={true} />);

    expect(screen.getByText(/Loading.../)).toBeDefined();
  });

  it('displays list of cities after it gets data', async () => {
    render(
      <WeatherList
        cities={WEATHER_RESPONSE.list}
        error={null}
        isLoading={false}
      />,
    );

    await waitFor(async () => {
      expect(screen.getByText(/Los Angeles/)).toBeDefined();
      expect(screen.getByText(/New York/)).toBeDefined();

      fireEvent.press(screen.getByText(/New York/));

      expect(mockedNavigate).toHaveBeenCalledTimes(1);
      expect(mockedNavigate).toHaveBeenCalledWith(RootRoute.WeatherDetails, {
        item: WEATHER_RESPONSE.list.find(item => item.name == 'New York'),
      });
    });
  });
});
