import React from 'react';
import {FlatList} from 'react-native';
import {CityWeatherData} from '../../shared/types';
import {WeatherListItem} from '../WeatherListItem';

interface Props {
  cities: CityWeatherData[];
}

const WeatherList = ({cities}: Props) => {
  return (
    <FlatList
      data={cities}
      renderItem={({item}) => <WeatherListItem item={item} />}
    />
  );
};

export default WeatherList;
