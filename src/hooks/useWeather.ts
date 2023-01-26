import {useState, useEffect} from 'react';
import {api} from '../api';
import {API_KEY} from '../shared/consts';
import {CityWeatherData, GetWeatherResponse} from '../shared/types';

export const useWeather = (
  citiesIds: number[],
): {data: CityWeatherData[]; isLoading: boolean; error: string | null} => {
  const [data, setData] = useState<CityWeatherData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCitiesWeather = async (ids: number[]) => {
      setIsLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams({
          units: 'metric',
          id: ids.join(','),
          APPID: API_KEY,
        });

        const response = await api.get<GetWeatherResponse>(
          `data/2.5/group?${queryParams}`,
        );

        setData(response.data?.list || []);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCitiesWeather(citiesIds);
  }, [citiesIds]);

  return {data, isLoading, error};
};
