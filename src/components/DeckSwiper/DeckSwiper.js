import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import Card from '../Card';
const DeckSwiper = props => {
  const {data, onSwipeRight, onSwipeLeft, onSignout} = props;

  return (
    <View style={styles.container}>
      <Swiper
        cards={data}
        renderCard={card => <Card user={card} />}
        verticalSwipe={false}
        horizontalSwipe={true}
        onSwipedLeft={onSwipeLeft}
        onSwipedRight={onSwipeRight}
        onSwiped={cardIndex => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={3}
        overlayLabelStyle={styles.overlayLabelStyle}
        overlayLabelWrapperStyle={styles.overlayLabelWrapperStyle}
        overlayLabels={styles.overlayLabels}>
        <Button onPress={onSignout} title="LogOut" />
      </Swiper>
    </View>
  );
};

export default DeckSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  overlayLabelStyle: {
    fontSize: 45,
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden',
  },
  overlayLabelWrapperStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 2,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayLabels: {
    left: {
      title: 'LIKE',
      style: {
        label: {
          // backgroundColor: 'black',
          borderColor: 'green',
          color: 'green',
          borderWidth: 1,
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: -30,
        },
      },
    },
    right: {
      title: 'NOPE',
      style: {
        label: {
          // backgroundColor: 'black',
          borderColor: 'red',
          color: 'red',
          borderWidth: 1,
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: 30,
        },
      },
    },
  },
});
