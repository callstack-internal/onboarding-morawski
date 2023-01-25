import React from 'react';
import { FlatList } from 'react-native'; 
import { WeatherListItem } from '../WeatherListItem'

const WeatherList = () => {
  const data = [
    { key: '1', name: 'Item 1', image: 'https://picsum.photos/50/50' },
    { key: '2', name: 'Item 2', image: 'https://picsum.photos/50/50' },
    { key: '3', name: 'Item 3', image: 'https://picsum.photos/50/50' },
    { key: '4', name: 'Item 4', image: 'https://picsum.photos/50/50' },
    { key: '5', name: 'Item 5', image: 'https://picsum.photos/50/50' },
    { key: '6', name: 'Item 6', image: 'https://picsum.photos/50/50' },
    { key: '7', name: 'Item 7', image: 'https://picsum.photos/50/50' },
    { key: '8', name: 'Item 8', image: 'https://picsum.photos/50/50' },
    { key: '9', name: 'Item 9', image: 'https://picsum.photos/50/50' },
    { key: '10', name: 'Item 10', image: 'https://picsum.photos/50/50' },
    { key: '11', name: 'Item 11', image: 'https://picsum.photos/50/50' },
    { key: '12', name: 'Item 12', image: 'https://picsum.photos/50/50' },
    { key: '13', name: 'Item 13', image: 'https://picsum.photos/50/50' },
    { key: '14', name: 'Item 14', image: 'https://picsum.photos/50/50' }
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <WeatherListItem item={item} />}
    />
  );
};

export default WeatherList;
