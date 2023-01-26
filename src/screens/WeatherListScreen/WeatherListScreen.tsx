import React from 'react';
import {WeatherList} from '../../components/WeatherList';
import {CITIES_LIST} from '../../shared/consts';
import {useWeather} from '../../hooks/useWeather';

const WeatherListScreen = () => {
  const citiesWeather = useWeather(CITIES_LIST);

  return <WeatherList cities={citiesWeather || []} />;
};

export default WeatherListScreen;
