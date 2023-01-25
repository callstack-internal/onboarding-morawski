import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

type Props = {
    item: {
        name: string;
        image: string;
    }
}

const WeatherItem: React.FC<Props> = ({ item }) => {
    const { image, name } = item
    
    const onListItemClick = (item: Props['item']) => {
        console.log(item.name)
    };
    
    return (
        <TouchableOpacity onPress={() => onListItemClick(item)}>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text>{name}</Text>
                <Icon name="chevron-right" size={24} color="black" style={styles.icon}/>
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
    }
});

export default WeatherItem;

