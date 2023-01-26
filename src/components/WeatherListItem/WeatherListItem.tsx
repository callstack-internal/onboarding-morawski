import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {RootRoute, useAppNavigation} from '../../navigation/Routes';
import {CityWeatherData} from '../../shared/types';
import {WeatherGeneralInfo} from '../WeatherGeneralInfo';

type Props = {
  item: CityWeatherData;
};

const WeatherItem: React.FC<Props> = ({item}) => {
  const navigation = useAppNavigation();

  const onListItemClick = useCallback(
    (_item: Props['item']) => {
      navigation.navigate(RootRoute.WeatherDetails, {item: _item});
    },
    [navigation],
  );

  return (
    <TouchableOpacity
      testID="weather-item-touchable"
      onPress={() => onListItemClick(item)}>
      <WeatherGeneralInfo item={item} />
    </TouchableOpacity>
  );
};

export default WeatherItem;
