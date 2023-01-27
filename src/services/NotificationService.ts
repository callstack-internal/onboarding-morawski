import NotificationModule from '../modules/NotificationModule';

export interface Notification {
  title: string;
  body: string;
}

export interface NotificatonReponse {}

export const showNotification = ({
  title,
  body,
}: Notification): NotificatonReponse => {
  try {
    NotificationModule.showNotification(title, body);

    return {success: true, error: ''};
  } catch (e: any) {
    console.error(e);

    return {success: false, error: e.msg};
  }
};
