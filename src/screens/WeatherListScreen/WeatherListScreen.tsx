import React from 'react';
import {WeatherList} from '../../components/WeatherList';
import {CITIES_LIST} from '../../shared/consts';
import {useWeather} from '../../hooks/useWeather';

const WeatherListScreen = () => {
  const {data, isLoading, error} = useWeather(CITIES_LIST);

  return (
    <WeatherList isLoading={isLoading} error={error} cities={data || []} />
  );
};

export default WeatherListScreen;
