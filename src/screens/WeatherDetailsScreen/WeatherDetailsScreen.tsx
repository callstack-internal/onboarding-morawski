import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {RootRoute, useAppRoute} from '../../navigation/Routes';

const WeatherDetailsScreen: React.FC = () => {
  const {
    params: {item},
  } = useAppRoute<RootRoute.WeatherDetails>();

  if (!item) {
    return <Text>UuU, sorry about that! Details unavailable :S</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.city}</Text>
          <Text style={styles.text}>{item.county}</Text>
        </View>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Temperature:</Text>
          <Text style={styles.text}>{item.temperature}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Humidity:</Text>
          <Text style={styles.text}>{item.humidity}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Wind Speed:</Text>
          <Text style={styles.text}>{item.windSpeed}</Text>
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
    margin: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default WeatherDetailsScreen;
