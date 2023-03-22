import React, {useContext, useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';

import {UserContext} from '../../contexts/UserContext';
import DeckSwiper from '../../components/DeckSwiper';
import users from '../../assets/data/users.json';
const Home = props => {
  const {setUser} = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      setUserDetails(currentUser.user);
      const newReference = database().ref(`/${currentUser.user.id}`);

      newReference
        .set({
          name: currentUser.user.name,
          email: currentUser.user.email,
        })
        .then(() => console.log('Data updated.'));
    };
    getUser();
  }, []);

  const googleSignOut = async () => {
    console.log('signout');
    try {
      await GoogleSignin.signOut();
      // Remember to remove the user from your app's state as well
      await AsyncStorage.multiRemove(['email', 'name']);
      setUser(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onSwipeLeft = user => {
    console.log('swipe left, like');

    const newReference = database().ref(
      `/${userDetails.id}/liked/${users[user].id}`,
    );

    console.log(users[user]);
    newReference
      .set({
        id: users[user].id,
        name: users[user].first_name,
        email: users[user].email,
      })
      .then(() => console.log('Data updated.'));
  };

  const onSwipeRight = user => {
    console.log('swipe right, dislike');

    const newReference = database().ref(
      `/${userDetails.id}/disliked/${users[user].id}`,
    );

    newReference
      .set({
        id: users[user].id,
        name: users[user].first_name,
        email: users[user].email,
      })
      .then(() => console.log('Data updated.'));
  };
  return (
    <DeckSwiper
      data={users}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      onSignout={googleSignOut}
    />
  );
};

export default Home;
