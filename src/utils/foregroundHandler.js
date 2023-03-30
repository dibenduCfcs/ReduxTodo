import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
const ForegroundHandler = () => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    const {title, message, messageId} = remoteMessage;
    PushNotification.localNotification({
      channelId: 'your-channel-id',
      id: messageId,
      title: title,
      message: message,
    });
  });
  return unsubscribe;
};
export default ForegroundHandler;
