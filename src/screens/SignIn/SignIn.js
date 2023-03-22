import {StyleSheet, View} from 'react-native';
import React, {useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const SignIn = props => {
  const [signStatus, setSignStatus] = useState(false);
  const {user, setUser} = useContext(UserContext);
  console.log(user, setUser);
  const storeData = async userInfo => {
    try {
      await AsyncStorage.setItem('email', userInfo.user?.email);
      await AsyncStorage.setItem('name', userInfo.user?.name);
      setUser(true);
    } catch (error) {
      console.log(error);
    }
  };
  const googleSignIn = async () => {
    setSignStatus(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await storeData(userInfo);
      setSignStatus(false);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
        setSignStatus(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
        setSignStatus(false);
      } else {
        // some other error happened
        console.log(error);
        setSignStatus(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.button}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
        disabled={signStatus}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 70,
  },
});
