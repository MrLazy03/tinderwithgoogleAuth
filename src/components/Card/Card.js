import React from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';

const Card = props => {
  const {first_name, last_name, avatar, email} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: avatar,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{first_name + ' ' + last_name}</Text>
          <Text style={styles.bio}>{email}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'red',
    lineHeight: 25,
  },
});

export default Card;
