import messaging from '@react-native-firebase/messaging';
import {setToken} from '../features/AddTodo/pushNotificationSlice';

const NotificationPermission = dispatch => {
  console.log('NotificationPermission');
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
    }
  }
  if (requestUserPermission()) {
    messaging()
      .getToken()
      .then(token => {
        console.log(token);
        dispatch(setToken(token));
      })
      .catch(error => console.log('Error', error));
  }
};
export default NotificationPermission;
