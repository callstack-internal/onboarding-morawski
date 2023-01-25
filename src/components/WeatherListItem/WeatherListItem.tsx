import React, {useCallback} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {RootRoute, useAppNavigation} from '../../navigation/Routes';
import {CityWeatherData} from '../../shared/types';
import {getImgSourceById, capitalizeFirsts} from './utils';

type Props = {
  item: CityWeatherData;
};

const WeatherItem: React.FC<Props> = ({item}) => {
  const navigation = useAppNavigation();

  const {
    weather: {
      0: {icon, description},
    },
    name,
  } = item;

  const onListItemClick = useCallback(
    (_item: Props['item']) => {
      navigation.navigate(RootRoute.WeatherDetails, {item: _item});
    },
    [navigation],
  );

  return (
    <TouchableOpacity onPress={() => onListItemClick(item)}>
      <View style={styles.container}>
        <Image source={{uri: getImgSourceById(icon)}} style={styles.image} />
        <View style={styles.textInfo}>
          <Text>{name}</Text>
          <Text style={styles.description}>
            {capitalizeFirsts(description)}
          </Text>
        </View>
        <Icon
          name="chevron-right"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  description: {
    color: 'grey',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  icon: {
    marginLeft: 'auto',
    height: 24,
    width: 24,
  },
});

export default WeatherItem;
