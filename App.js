import {useEffect} from 'react';
import NotificationPermission from './src/utils/notificationPermission';
import {useDispatch, useSelector} from 'react-redux';
import ApiTest from './src/screen/ApiTest';
import Test from './src/screen/Test';
import TodoList from './src/screen/TodoList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForegroundHandler from './src/utils/foregroundHandler';
import PushNotification from './src/utils/pushNotification';
import FacebookLogin from './src/screen/facebookLogin';
const Stack = createNativeStackNavigator();
export let navigatorRef;
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.pushNotificationReducer.token);
  console.log(token);
  useEffect(() => {
    console.log('USEEFFETC');
    ForegroundHandler();
    NotificationPermission(dispatch);
    PushNotification();
  }, []);
  return (
    <NavigationContainer
      ref={nav => {
        navigatorRef = nav;
      }}>
      <Stack.Navigator
        screenOptions={{animation: 'fade'}}
        initialRouteName="TodoList">
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="ApiTest" component={ApiTest} />
        <Stack.Screen name="FacebookLogin" component={FacebookLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
