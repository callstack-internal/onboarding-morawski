import React from 'react';
import {FlatList, Text} from 'react-native';
import {CityWeatherData} from '../../shared/types';
import {WeatherListItem} from '../WeatherListItem';

interface Props {
  cities: CityWeatherData[];
  isLoading: boolean;
  error: string | null;
}

const WeatherList = ({cities, isLoading, error}: Props) => {
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Something went wrong, maybe try reloading app</Text>;
  }

  return (
    <FlatList
      data={cities}
      renderItem={({item}) => <WeatherListItem item={item} />}
    />
  );
};

export default WeatherList;
