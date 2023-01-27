import {NativeModules} from 'react-native';

export interface Notification {
  title: string;
  body: string;
}

export interface NotificatonReponse {
  success: boolean;
  error: string;
}

export const showNotification = ({
  title,
  body,
}: Notification): NotificatonReponse => {
  try {
    NativeModules.Notification.showNotification(title, body);

    return {success: true, error: ''};
  } catch (e: any) {
    console.error(e);

    return {success: false, error: e.msg};
  }
};
