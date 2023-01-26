import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WeatherDetailsScreen} from '../screens/WeatherDetailsScreen';
import {WeatherListScreen} from '../screens/WeatherListScreen';
import {RootStackParamList, RootRoute} from './Routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootRoute.WeatherList}
        component={WeatherListScreen}
      />
      <Stack.Screen
        name={RootRoute.WeatherDetails}
        component={WeatherDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
