import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useState, useEffect} from 'react';
let Test = props => {
  // const newProductDetail = {
  //   id: 9528218120,
  //   name: 'Vishal Sharma Airways',
  //   country: 'INDIA',
  //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png',
  //   slogan: 'From Sri Lanka',
  //   head_quaters: 'Katunayake, Sri Lanka',
  //   website: 'www.srilankaairways.com',
  //   established: '1990',
  // };
  // const [addNewProduct, {data, isLoading}] = useAddNewProductMutation();
  // console.log('data', data);
  // const addNewProductFunc = async () => {
  //   try {
  //     await addNewProduct(newProductDetail).unwrap();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
      // setloggedIn(false);
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  async function onGoogleButtonPress() {}
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '905759688281-4fb10fkpjmd5dmqoa8m7ftld2ied1og6.apps.googleusercontent.com',
    });
    // isSignedIn();
  }, []);
  const isSignedIn = async () => {
    if (!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };
  const [user, setUser] = useState({});

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo SignIn===>==>', {userInfo});
      const {accessToken, idToken} = await GoogleSignin.signIn();
      console.log('userInfo SignIn===>==>', accessToken, '      ', idToken);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      console.log('credential', credential);
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error.code', error.code);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error.code', error.code);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error.code', error.code);
      } else {
        console.log('error.code', error);
      }
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({}); // Remember to remove the user from your app's state as well
      console.log('user SignOut==>', {user});
    } catch (error) {
      console.error(error);
    }
  };

  // console.log('user', user);
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      />
      <TouchableOpacity onPress={_signOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('ApiTest')}>
        <Text>API TEST</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('TodoList')}>
        <Text>Todo List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNewProductFunc()}>
        <Text style={{alignSelf: 'center', fontSize: 18}}>Add Product</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};
export default Test;
