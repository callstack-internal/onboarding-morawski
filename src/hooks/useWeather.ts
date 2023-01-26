import {useState, useEffect} from 'react';
import {api} from '../api';
import {API_KEY} from '../shared/consts';
import {CityWeatherData, GetWeatherResponse} from '../shared/types';

export const useWeather = (
  citiesIds: number[],
): CityWeatherData[] | undefined => {
  const [data, setData] = useState<CityWeatherData[]>([]);

  useEffect(() => {
    const getCitiesWeather = async (citiesIds: number[]) => {
      const queryParams = new URLSearchParams({
        units: 'metric',
        id: citiesIds.join(','),
        APPID: API_KEY,
      });

      const response = await api.get<GetWeatherResponse>(
        `data/2.5/group?${queryParams}`,
      );

      setData(response.data?.list || []);
    };

    getCitiesWeather(citiesIds);
  }, []);

  return data;
};
