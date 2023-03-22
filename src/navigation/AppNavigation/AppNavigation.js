import React, {useEffect, useContext} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import HomeStack from '../HomeStack';
import AuthStack from '../AuthStack';
import {UserContext} from '../../contexts/UserContext';

const AppNavigation = () => {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    const isSignedIn = async () => {
      const isSignedInStatus = await GoogleSignin.isSignedIn();
      const status = isSignedInStatus.valueOf();
      setUser(status);
    };
    isSignedIn();
  }, [user]);

  const renderAppStack = () => {
    return user ? <HomeStack /> : <AuthStack />;
  };

  return renderAppStack();
};

export default AppNavigation;
