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
  textColor: string;
  enabled: boolean;
  onPress?: () => void;
};

const NotificationButton = ({text, textColor, enabled, onPress}: Props) => {
  return (
    <NativeNotificationButton
      style={styles.button}
      text={text}
      textColor={textColor}
      enabled={enabled}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifySelf: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default NotificationButton;
