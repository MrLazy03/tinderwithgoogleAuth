/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import AppNavigation from './src/navigation/AppNavigation';
import {UserContext} from './src/contexts/UserContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AppNavigation />
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
