import React from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

const NativeNotificationButton =
  requireNativeComponent<Props>('NotificationButton');

type Props = {
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress?: () => void;
};

const NotificationButton = ({text, onPress}: Props) => {
  return (
    <NativeNotificationButton
      style={styles.button}
      text={text}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotificationButton;
