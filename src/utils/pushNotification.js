//quite background permission

import messaging from '@react-native-firebase/messaging';
import {navigatorRef} from './../../App';

const PushNotification = () => {
  //   NotificationPermission;

  //background
  messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage,
    );
    const data = Object.keys(remoteMessage.data);
    console.log('Keys backgroungHandler', data);
    if (data.includes('screenName')) {
      navigatorRef.navigate(remoteMessage.data.screenName);
    } else {
      navigatorRef.navigate('Test');
    }
  });

  //background Handler

  //initial
  messaging()
    .getInitialNotification()
    .then(async remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage,
        );
        const data = Object.keys(remoteMessage.data);
        console.log('Keys exitHandler', data);
        if (data.includes('screenName')) {
          navigatorRef.navigate(remoteMessage.data.screenName);
        } else {
          navigatorRef.navigate('Test');
        }
      }
    });
};
export default PushNotification;
