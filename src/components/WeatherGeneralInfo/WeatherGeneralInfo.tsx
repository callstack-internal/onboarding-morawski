import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {CityWeatherData} from '../../shared/types';
import {getImgSourceById, capitalizeFirsts} from './utils';

type Props = {
  item: CityWeatherData;
  showIcon?: boolean;
};

const WeatherGeneralInfo: React.FC<Props> = ({item, showIcon}) => {
  const {
    weather: {
      0: {icon, description},
    },
    main: {temp},
    name,
  } = item;

  return (
    <View style={styles.container}>
      <Image source={{uri: getImgSourceById(icon)}} style={styles.image} />
      <View style={styles.textInfoContainer}>
        <View style={styles.textInfo}>
          <Text>{name}</Text>
          <Text style={styles.description}>
            {capitalizeFirsts(description)}
          </Text>
        </View>
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>{temp}&#8451;</Text>
        </View>
      </View>
      {showIcon && (
        <Icon
          name="chevron-right"
          size={24}
          color="black"
          style={styles.icon}
        />
      )}
    </View>
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
  textInfoContainer: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
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
  temperatureContainer: {
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    paddingHorizontal: 8,
    height: 30,
    borderRadius: 10,
    marginRight: 15,
  },
  temperature: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WeatherGeneralInfo;
