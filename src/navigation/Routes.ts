import {RouteProp} from '@react-navigation/core/src/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CityWeatherData} from '../shared/types';

export enum RootRoute {
  WeatherList = 'Weather List',
  WeatherDetails = 'Weather Details',
}

export type RootStackParamList = {
  [RootRoute.WeatherDetails]: {item?: CityWeatherData};
  [RootRoute.WeatherList]: undefined;
};

export function useAppRoute<RouteName extends keyof RootStackParamList>() {
  return useRoute<RouteProp<RootStackParamList, RouteName>>();
}

export function useAppNavigation<RouteName extends keyof RootStackParamList>() {
  return useNavigation<
    NativeStackNavigationProp<RootStackParamList, RouteName>
  >();
}
