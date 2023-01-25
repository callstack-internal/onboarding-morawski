import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WeatherGeneralInfo} from '../../components/WeatherGeneralInfo';
import {RootRoute, useAppRoute} from '../../navigation/Routes';

const WeatherDetailsScreen: React.FC = () => {
  const {
    params: {item},
  } = useAppRoute<RootRoute.WeatherDetails>();

  if (!item) {
    return <Text>UuU, sorry about that! Details unavailable :S</Text>;
  }

  const {
    main: {humidity, pressure},
    wind: {speed},
    clouds: {all},
  } = item;

  return (
    <View style={styles.container}>
      <WeatherGeneralInfo item={item} />
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Humidity:</Text>
          <Text style={styles.value}>{humidity}%</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Pressure:</Text>
          <Text style={styles.value}>{pressure} hPa</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Wind Speed:</Text>
          <Text style={styles.value}>{speed} mPh</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Cloud cover:</Text>
          <Text style={styles.value}>{all}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  bottomContainer: {
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingVertical: 3,
    alignContent: 'center',
    paddingHorizontal: 25,
  },
  value: {
    marginRight: 10,
    color: 'grey',
  },
  label: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default WeatherDetailsScreen;
