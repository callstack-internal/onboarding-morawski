import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WeatherGeneralInfo} from '../../components/WeatherGeneralInfo';
import {RootRoute, useAppRoute} from '../../navigation/Routes';
import {NotificationButton} from '../../components/NotificationButton';
import {showNotification} from '../../services/NotificationService';

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

  const data = [
    {
      key: 'Humidity',
      value: `${humidity}%`,
    },
    {
      key: 'Pressure',
      value: `${pressure} hPa`,
    },
    {
      key: 'Wind Speed',
      value: `${speed} mPh`,
    },
    {
      key: 'Cloud cover',
      value: `${all}%`,
    },
  ];

  const onNotificationButtonPress = () => {
    showNotification({
      title: 'Weather notification',
      body: `Hello this is your precious notification. Passing data for: ${item.name}. Woop woop!`,
    });
  };

  return (
    <View style={styles.container}>
      <WeatherGeneralInfo item={item} />
      <View style={styles.bottomContainer}>
        {data.map(d => (
          <View key={d.key} style={styles.textContainer}>
            <Text style={styles.label}>{d.key}:</Text>
            <Text style={styles.value}>{d.value}</Text>
          </View>
        ))}
      </View>
      <NotificationButton
        onPress={onNotificationButtonPress}
        text="notification"
        textColor="white"
        enabled={true}
      />
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
