import {Settings} from 'react-native-fbsdk-next';
Settings.setAppID('APP ID');
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import {Profile} from 'react-native-fbsdk-next';

// LoginManager.logInWithPermissions(['public_profile']).then(
//   function (result) {
//     if (result.isCancelled) {
//       console.log('Login cancelled');
//     } else {
//       console.log(
//         'Login success with permissions: ' +
//           result.grantedPermissions.toString(),
//       );
//     }
//   },
//   function (error) {
//     console.log('Login fail with error: ' + error);
//   },
// );

const FacebookLogin = () => {
  return (
    <View>
      <LoginButton
        style={{width: 192, height: 48}}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        currentProfile={Profile.getCurrentProfile().then(function (
          currentProfile,
        ) {
          if (currentProfile) {
            console.log(
              'The current logged user is: ' +
                currentProfile.name +
                '. His profile id is: ' +
                currentProfile.userID,
            );
          }
        })}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
};
export default FacebookLogin;
