import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../screens/SignIn';
function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      //   initialRouteName="SignIn"
      screenOptions={{
        headerStyle: {
          //   backgroundColor: theme.colors.card,
        },
        // headerTintColor: theme.colors.primaryText,
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
