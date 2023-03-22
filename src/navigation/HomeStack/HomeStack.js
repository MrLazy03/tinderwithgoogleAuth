import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';

function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // statusBarColor: theme.colors.card,
        headerStyle: {
          //   backgroundColor: theme.colors.card,
        },
        // headerTintColor: theme.colors.primaryText,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
