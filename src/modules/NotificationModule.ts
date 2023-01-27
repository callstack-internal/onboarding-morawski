import {NativeModules} from 'react-native';

class NotificationModule {
  static showNotification = (title: string, body: string) => {
    const module = NativeModules.Notification;

    module.showNotification(title, body);
  };
}

export default NotificationModule;
